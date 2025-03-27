import React from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import styled, { css } from "styled-components";
import { find_input_error } from "../helpers/find_input_error";
import { is_form_invalid } from "../helpers/is_form_invalid";

const StyledInputFormRow = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  gap: 1.5rem;

  &.column {
    flex-direction: column;
  }

  &.row {
    flex-direction: row;
    align-items: center;
    display: flex;
  }

  .label {
    flex: 0.33;
    padding: 0;
    /* font-size: ${({ theme }) => theme.typography.text.xs}; */
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    color: ${({ theme, background }) =>
      background ? theme.colors.grey.e : theme.colors.grey.g};

    ${({ type }) =>
      type === "checkbox" &&
      css`
        text-transform: lowercase;
        letter-spacing: normal;
        font-weight: 500;
      `}

    ${({ type }) =>
      type === "radio" &&
      css`
        text-transform: lowercase;
        letter-spacing: normal;
        font-weight: 500;
      `};
  }

  .input-container {
    flex: 0.63;
    display: inline-flex;

    order: ${({ type }) => (type === "checkbox" || type === "radio" ? -1 : 0)};

    position: relative;
  }

  .my_input {
    width: 100%;
    height: 100%;

    background: ${({ background, type, theme }) =>
      type === "checked" || type === "radio"
        ? "none"
        : background
        ? background
        : theme.colors.grey.input_bg};
    border-radius: ${({ theme, border }) =>
      border ? theme.border_radius.sm : 0};
    /* padding: 1rem 2rem; */
    /* padding: 2.5rem 2rem; */
    padding: 0;

    color: ${({ background, theme }) =>
      background ? theme.colors.grey[0] : theme.colors.grey.e};
    /* border: 1px solid #bbb; */
    border: ${({ border }) => (border ? "1px solid #bbb" : "none")};

    &::placeholder {
      ${({ placeholder_text }) =>
        placeholder_text === "true"
          ? css`
              display: block;
              opacity: 1;
              visibility: visible;
            `
          : css`
              display: none;
              opacity: 0;
              visibility: hidden;
            `}

      color: ${({ background, theme }) =>
        background ? theme.colors.grey.f : theme.colors.grey.e};
      /* color: ${({ theme }) => theme.colors.grey[0]}; */
      /* font-size: ${({ theme }) => theme.typography.text.xs}; */
      /* font-size: ${({ theme }) => theme.typography.text.tiny}; */
      font-size: 14px;
    }
  }

  .text_area {
    /* min-height: 8rem; */
    height: 100%;
    /* resize: vertical; */
    resize: none;
  }

  .error_container {
    // flex: 0.2;
    font-size: ${({ theme }) => theme.typography.text.xs};
    color: ${({ theme }) => theme.colors.error};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .send_btn_svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

function Input_error({ message }) {
  return (
    <motion.span
      className="error_message flex_items align_middle g_1"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.span>
  );
}

function Input_field({
  id,
  label,
  type = "text",
  placeholder,
  is_working,
  validationRules,
  text_area,
  other_class,
  svg,
  layout = "column",
  background,
  border,
  placeholder_text,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const input_error = find_input_error(errors, id);
  const is_invalid = is_form_invalid(input_error);

  return (
    <StyledInputFormRow
      className={`${layout} ${other_class} relative`}
      type={type}
      background={background}
    >
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className="input-container">
        {text_area ? (
          <textarea
            id={id}
            disabled={is_working}
            className="my_input text_area"
            placeholder={placeholder}
            {...register(id, validationRules)}
          />
        ) : (
          <input
            type={type}
            id={id}
            className="my_input"
            disabled={is_working}
            placeholder={placeholder}
            {...register(id, validationRules)}
          />
        )}
        {svg && <div className="send_btn_svg">{svg}</div>}
      </div>
      <div className="error_container absolute">
        <AnimatePresence mode="wait" initial={false}>
          {is_invalid && (
            <Input_error
              message={input_error.error.message}
              key={input_error.error.message}
            />
          )}
        </AnimatePresence>
      </div>
    </StyledInputFormRow>
  );
}

export default Input_field;

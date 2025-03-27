import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import { Form_row } from '../ui/form_row.component';
import Input_field from './input_field.component';
import { get_any_input_validation } from '../helpers/get_any_input_validation';
import Button from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { theme } from '../styles/theme';
import { respond_to } from '../helpers/breakpoints';

function ContactForm() {
  const methods = useForm();

  const { handleSubmit } = methods;

  function handle_submit(data) {
    console.log(data);
  }

  const full_name_validation = get_any_input_validation(
    'Full Name',
    'text',
    true
  );

  const email_validation = get_any_input_validation(
    'Email Address',
    'text',
    true
  );

  const message_validation = get_any_input_validation(
    'Your Message',
    'text',
    true
  );

  return (
    <FormProvider {...methods}>
      <ContactFormWrapper
        className="relative"
        onSubmit={handleSubmit(handle_submit)}
      >
        <Form_row other_class="common">
          <Input_field
            title="Full Name"
            label="Full Name"
            background={theme.colors.grey.h}
            {...full_name_validation}
          />
        </Form_row>
        <Form_row other_class="common">
          <Input_field
            title="Email Address"
            label="Email Address"
            background={theme.colors.grey.h}
            {...email_validation}
          />
        </Form_row>
        <Form_row other_class="message">
          <Input_field
            title="Your Message"
            label="Your Message"
            background={theme.colors.grey.h}
            text_area={true}
            {...message_validation}
          />
        </Form_row>
        {/* <div className="send_message_btn"> */}
        <Button block={true} size="large">
          Send Message{' '}
          <span>
            <ArrowUpRight className="arrow_svg" />
          </span>
        </Button>
        {/* </div> */}
      </ContactFormWrapper>
    </FormProvider>
  );
}

const ContactFormWrapper = styled.form`
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  column-gap: 2rem;
  /* background: ${({ theme }) => theme.colors.grey.f}; */
  justify-content: center;
  align-items: center;
  padding-block: 4rem;
  width: 40%;

  .subject,
  .message,
  .send_message_btn {
    grid-column: 1/ -1;
  }

  .common,
  .message {
    /* margin-inline: 4rem; */
  }

  label {
    color: ${({ theme }) => theme.colors.grey[300]};
  }

  textarea {
    height: 10rem;
    background: ${({ theme }) => theme.colors.grey.f};
    border: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grey.e};
  }

  ${respond_to('1000')} {
    .contact_form_container {
      grid-template-columns: 1fr;
    }
  }
  ${respond_to('768')} {
    width: 50%;
  }
  ${respond_to('600')} {
    width: 60%;
  }
  ${respond_to('450')} {
    width: 80%;
  }

  .arrow_svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default ContactForm;

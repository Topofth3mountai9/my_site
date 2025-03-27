import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Row from '../ui/row';
import { Form_row } from '../ui/form_row.component';
import Input_field from './input_field.component';
import styled from 'styled-components';
import { get_any_input_validation } from '../helpers/get_any_input_validation';
import { theme } from '../styles/theme';
import Button from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { respond_to } from '../helpers/breakpoints';

function Better_contact_form() {
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
      <ContactFormWrapper onSubmit={handleSubmit(handle_submit)}>
        <Row type="horizontal">
          <div className="horizontal_line top"></div>
          <div className="horizontal_line bottom"></div>
          <Form_row other_class="common full_name">
            <Input_field
              title="Full Name"
              label="Full Name"
              background={theme.colors.unknown_colors.transparent}
              border={false}
              placeholder_text={false}
              other_class="common_input"
              {...full_name_validation}
            />
            <div className="vertical_line"></div>
          </Form_row>
          <Form_row other_class="common email_address">
            <Input_field
              title="Email Address"
              label="Email Address"
              background={theme.colors.unknown_colors.transparent}
              border={false}
              placeholder_text={false}
              other_class="common_input"
              {...email_validation}
            />
          </Form_row>
        </Row>
        <Row type="horizontal">
          <div className="horizontal_line bottom"></div>
          <Form_row other_class=" common message">
            <Input_field
              title="Your Message"
              label="Your Message"
              background={theme.colors.unknown_colors.transparent}
              border={false}
              placeholder_text={false}
              text_area={true}
              other_class="common_input"
              {...message_validation}
            />
          </Form_row>
        </Row>
        <Row type="horizontal" align="center_horizontal">
          {/* <Form_row center={true}> */}
          <Button size="large" other_class="send_btn">
            Send Message{' '}
            <span>
              <ArrowUpRight className="arrow_svg" />
            </span>
          </Button>
          {/* </Form_row> */}
        </Row>
      </ContactFormWrapper>
    </FormProvider>
  );
}

const ContactFormWrapper = styled.form`
  width: 100%;

  .horizontal_line {
    position: absolute;
    height: 0.052vw;
    width: 100%;
    background: ${({ theme }) => theme.colors.grey.e};
    z-index: 2;
  }
  .top {
    top: 0;
    left: 0;
  }
  .bottom {
    bottom: 0;
    left: 0;
  }

  .common {
    /* width: 100%; */
    height: 12.75vw;

    ${respond_to('500')} {
      /* height: 15vw; */
    }
  }

  .common_input {
    gap: 0;
  }

  .full_name,
  .email_address {
    width: 50%;
  }

  .full_name {
    position: relative;

    .vertical_line {
      position: absolute;
      top: 0;
      right: 0;
      width: 0.052vw;
      height: 100%;
      background: ${({ theme }) => theme.colors.grey.e};
    }
  }

  .email_address {
    margin-left: 3rem;
  }

  .message {
    width: 100%;
    /* min-height: 8rem; */
    height: 14.75vw;

    ${respond_to('500')} {
      /* height: 16vw; */
    }
  }

  .common_input {
    border: none;
  }

  .send_btn {
    margin-top: 2rem;
  }

  ${respond_to('500')} {
    .common {
      height: 15vw;
    }

    .message {
      /* height: 16vw; */
      height: 21vw;
    }
  }
`;

const styledColumn = styled.div`
  width: 50%;
`;
export default Better_contact_form;

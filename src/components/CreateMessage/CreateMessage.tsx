/**
 * CreateMessage
 *
 * input field in charge of pushing messages to firebase
 *
 */

import * as React from "react";
import Styled from "./styles/Styled";

interface ICreateMessage {
  handleChange?: (args: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit?: (args: React.FormEvent<HTMLElement>) => void;
  placeholder?: string;
  value?: string;
}

const CreateMessage: React.SFC<ICreateMessage> = (props) => {
  const { value, handleChange, handleSubmit, placeholder } = props;
  return (
    <Styled.Span>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.InputField
          type="text"
          name="message"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Styled.Form>
    </Styled.Span>
  );
};

export default CreateMessage;

/**
 * CreateChatRoom component
 *
 * component that creates chat room names
 *
 */

import * as React from "react";
import Styled from "./styles/Styled";

export interface ICreateChatRoomProps {
  /**
   * Closes modal
   */
  closeComponent: (args: React.ButtonHTMLAttributes<any>) => any;

  /**
   * Enables or disables the submit button
   */
  isDisabled: boolean;

  /**
   * Sets state for the name of the chatroom name*
   */
  handleChange: (args: React.FormEvent<HTMLInputElement>) => void;

  /**
   * Event handler that sends information to firebase
   */
  handleSubmit: (args: React.FormEvent<HTMLElement>) => void;

  /**
   * prevents submission when user press enter key
   */
  onKeyPress: (arg: React.KeyboardEvent) => void;

  /**
   * The name of the chatroom provided by the state
   */
  value: string;
}

/* Input filed that pushes the name of a newly create chat room to firebase */
const CreateChatRoom: React.SFC<ICreateChatRoomProps> = (props) => {
  const {
    value,
    onKeyPress,
    handleChange,
    handleSubmit,
    isDisabled,
    closeComponent
  } = props;
  return (
    <Styled.Form as="form" xs={8} md={6} id="createChatRoom">
      <button type="button" onClick={closeComponent}>
        close
      </button>
      <Styled.Label htmlFor="chatRoom">
        Enter the name for the new chat room
      </Styled.Label>
      <Styled.InputField
        type="text"
        name="chatRoom"
        value={value}
        placeholder="Create a new chat"
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      <Styled.Button
        type="button"
        buttonState={isDisabled}
        onClick={handleSubmit}
      >
        Create
      </Styled.Button>
    </Styled.Form>
  );
};

CreateChatRoom.defaultProps = {
  isDisabled: true
};

export default CreateChatRoom;

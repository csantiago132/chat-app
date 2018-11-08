/**
 * CreateChatRoom component
 *
 * component that creates chat room names
 *
 */

import * as React from "react";
import { Styled } from "./styles";

interface ICreateChatRoomProps {
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
   * The name of the chatroom provided by the state
   */
  value: string;
}

/* Input filed that pushes the name of a newly create chat room to firebase */
const CreateChatRoom: React.SFC<ICreateChatRoomProps> = (props) => {
  const { value, handleChange, handleSubmit, isDisabled } = props;
  return (
    <Styled.Form className="create-chat-room" onSubmit={handleSubmit}>
      <Styled.Label htmlFor="chatRoom">
        Enter the name for the new chat room
      </Styled.Label>
      <Styled.InputField
        type="text"
        name="chatRoom"
        value={value}
        placeholder="Create a new chat"
        onChange={handleChange}
      />
      <Styled.Button type="submit" state={isDisabled}>
        Create
      </Styled.Button>
    </Styled.Form>
  );
};

CreateChatRoom.defaultProps = {
  isDisabled: true
};

export default CreateChatRoom;

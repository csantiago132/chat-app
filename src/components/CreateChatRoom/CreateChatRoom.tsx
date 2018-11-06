/**
 * CreateChatRoom component
 *
 * component that creates chat room names
 *
 */

import * as React from "react";

interface ICreateChatRoomProps {
  /** Enables or disables the input field */
  disabled: boolean;
  /** Sets state for the name of the chatroom name  */
  handleChange: (...args: any[]) => void;
  /** Event handler that sends information to firebase  */
  handleSubmit: (...args: any[]) => void;
  /** The name of the chatroom provided by the state  */
  value: string;
}

/* Input filed that pushes the name of a newly create chat room to firebase */
const CreateChatRoom: React.SFC<ICreateChatRoomProps> = (
  props: ICreateChatRoomProps
) => {
  const { value, handleChange, handleSubmit, disabled } = props;
  return (
    <form className="create-chat-room" onSubmit={handleSubmit}>
      <label className="create-chat-room__label" htmlFor="chatRoom">
        Create Chat Room
      </label>
      <input
        className="create-chat-room__input-field"
        type="text"
        name="chatRoom"
        value={value}
        placeholder="Create a new chat"
        onChange={handleChange}
      />
      <button
        className="create-chat-room__submit-button"
        type="submit"
        disabled={disabled}
      >
        Create
      </button>
    </form>
  );
};

export default CreateChatRoom;

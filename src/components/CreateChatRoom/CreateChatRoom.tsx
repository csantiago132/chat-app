import * as React from 'react';

interface ICreateChatRoomProps {
  disabled: any;
  handleChange: (...args: any[]) => void;
  handleSubmit: (...args: any[]) => void;
  value?: any;
}

/* Input filed that pushes the name of a newly create chat room to firebase */
const CreateChatRoom: React.SFC<ICreateChatRoomProps> = (props: ICreateChatRoomProps) => {
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

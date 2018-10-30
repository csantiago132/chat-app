import React from 'react';
import PropTypes from 'prop-types';

const CreateChatRoom = (props) => {
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

CreateChatRoom.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CreateChatRoom;

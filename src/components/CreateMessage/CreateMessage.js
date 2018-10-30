import React from 'react';
import PropTypes from 'prop-types';
import './CreateMessage.scss';

const CreateMessage = (props) => {
  const { value, handleChange, handleSubmit, placeholder } = props;
  return (
    <span className="create-message__container">
      <form className="create-message__form" onSubmit={handleSubmit}>
        <input
          className="create-message__input-field"
          type="text"
          name="message"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          ref={(input) => input && input.focus()}
        />
      </form>
    </span>
  );
};

CreateMessage.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CreateMessage;

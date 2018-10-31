/**   
 * CreateMessage
 * 
`* input field in charge of pushing messages to firebase 
 * 
 */

import * as React from 'react';
import './CreateMessage.scss';

interface ICreateMessage {
  handleChange?: (...args: any[]) => any;
  handleSubmit?: (...args: any[]) => any;
  placeholder?: string;
  value?: string;
}

const CreateMessage: React.SFC<ICreateMessage> = (props) => {
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
        />
      </form>
    </span>
  );
};

export default CreateMessage;

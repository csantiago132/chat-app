import React from 'react';
import PropTypes from 'prop-types';
import './MessageList.scss';

const MessageList = (props) => {
  const {
    sentAt,
    currentUser,
    userId,
    username,
    content,
    avatar,
    deleteMessage,
    key,
  } = props;

  const date = new Date(sentAt);
  const convertTimestampToLocalTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const convertTimestampToLocalDate = date.toLocaleDateString();
  return (
    <article className="chat-message" key={key}>
      <img
        className="chat-message__profile-picture"
        src={avatar}
        alt={username}
      />
      <header className="chat-message__header">
        <h1 className="chat-message__username">{username}</h1>
        <time className="chat-message__time-stamp">
          {convertTimestampToLocalDate} at: {convertTimestampToLocalTime}
        </time>
        <p className="chat-message__message">{content}</p>
      </header>
      {currentUser === userId && (
        <aside className="chat-message__controls">
          <button className="chat-message__controls__action-button ion-ios-compose-outline" />
          <button
            className="chat-message__controls__action-button ion-trash-a"
            onClick={deleteMessage}
          />
        </aside>
      )}
    </article>
  );
};

MessageList.propTypes = {
  sentAt: PropTypes.number.isRequired,
  currentUser: PropTypes.string.isRequired,
  userId: PropTypes.string,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  deleteMessage: PropTypes.func,
  key: PropTypes.string,
};

export default MessageList;

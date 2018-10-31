/**
 * MessageList
 * 
 * Individual chat message component from any user
 * 
 */

import * as React from 'react';
import './MessageList.scss';

interface IMessageList {
  avatar: string;
  content: string;
  currentUser?: string;
  deleteMessage: (...arg: any[]) => any;
  id: string;
  sentAt: number;
  userId?: any;
  username: string;
}

const MessageList: React.SFC<IMessageList> = (props) => {
  const {
    avatar,
    content,
    currentUser,
    deleteMessage,
    id,
    sentAt,
    userId,
    username
  } = props;

  // sendAt based on firebase timestamp
  const date = new Date(sentAt);
  // renders sendAt formatted for time
  const convertTimestampToLocalTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  // renders renders sendAt formatted for date
  const convertTimestampToLocalDate = date.toLocaleDateString();
  return (
    <article className="chat-message" key={id}>
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
      {/**
        * if current user is the same as the userID from the message
        * user can delete its own message 
        * 
        * */}
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

export default MessageList;

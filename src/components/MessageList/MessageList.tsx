/**
 * MessageList
 *
 * Individual chat message component from any user
 *
 */

import * as React from "react";
import Styled from "./styles/Styled";

interface IMessageList {
  avatar: string;
  content: string;
  currentUser?: string;
  deleteMessage: (args: React.ButtonHTMLAttributes<any>) => void;
  id: string;
  sentAt: number;
  userId: any;
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
    hour: "2-digit",
    minute: "2-digit"
  });
  // renders renders sendAt formatted for date
  const convertTimestampToLocalDate = date.toLocaleDateString();
  return (
    <Styled.Article key={id}>
      <Styled.Img src={avatar} alt={username} />
      <Styled.Header>
        <Styled.H1>{username}</Styled.H1>
        <Styled.Time>
          {convertTimestampToLocalDate} at: {convertTimestampToLocalTime}
        </Styled.Time>
        <Styled.P>{content}</Styled.P>
      </Styled.Header>
      {/*
       * if current user is the same as the userID from the message
       * user can delete its own message
       */}
      {currentUser === userId && (
        <Styled.Aside>
          <Styled.Button className="ion-ios-compose-outline" />
          <Styled.Button className="ion-trash-a" onClick={deleteMessage} />
        </Styled.Aside>
      )}
    </Styled.Article>
  );
};

export default MessageList;

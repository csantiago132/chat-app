/**
 * RoomsList
 *
 * renders room information coming from firebase
 * and provides a link to them
 *
 */

import * as React from "react";
import Styled from "./styles/Styled";

interface IRoomsList {
  name: string;
  userId: string;
  createdBy: string;
  currentUserId?: string;
  setActiveRoom: (args: React.ButtonHTMLAttributes<any>) => void;
  deleteRoom: (args: React.ButtonHTMLAttributes<any>) => void;
}

const RoomsList: React.SFC<IRoomsList> = (props) => {
  const { name, setActiveRoom, deleteRoom, userId, currentUserId } = props;
  return (
    <Styled.Article>
      <Styled.Button onClick={setActiveRoom}>{name}</Styled.Button>
      {/*
       * if current user is the same as the userID
       * that created the chatroom, the user can delete it
       */}
      {userId === currentUserId && (
        <Styled.DeleteButton className="ion-trash-a" onClick={deleteRoom} />
      )}
    </Styled.Article>
  );
};

export default RoomsList;

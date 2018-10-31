/**
 * RoomsList
 * 
 * renders room information coming from firebase
 * and provides a link to them
 * 
 */

import * as React from 'react';
import './RoomsList.scss';

interface IRoomsList {
  name: string;
  userId: string;
  createdBy: string;
  currentUserId?: string;
  setActiveRoom: (...arg: any[]) => any;
  deleteRoom: (...arg: any[]) => any;
}

const RoomsList: React.SFC<IRoomsList> = (props) => {
  const { name, setActiveRoom, deleteRoom, userId, currentUserId } = props;
  return (
    <article className="chatroom-control">
      <button className="chatroom-control__button" onClick={setActiveRoom}>
        {name}
      </button>
      {/**
        * if current user is the same as the userID 
        * that created the chatroom, the user can delete it
        * 
        */}
      {userId === currentUserId && (
        <button
          className="chatroom-control__controls ion-trash-a"
          onClick={deleteRoom}
        />
      )}
    </article>
  );
};

export default RoomsList;

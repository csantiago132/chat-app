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

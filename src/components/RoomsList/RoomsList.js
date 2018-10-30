import React from 'react';
import PropTypes from 'prop-types';
import './RoomsList.scss';

const RoomsList = (props) => {
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

RoomsList.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  userId: PropTypes.string,
  currentUserId: PropTypes.string,
  setActiveRoom: PropTypes.func.isRequired,
  deleteRoom: PropTypes.func.isRequired,
};

export default RoomsList;

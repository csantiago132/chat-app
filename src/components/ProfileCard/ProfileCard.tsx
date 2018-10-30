import * as React from 'react';
import './ProfileCard.scss';

interface IProfileCard {
  displayImage: string;
  displayName: string;
  logout: (...arg: any[]) => any;
}

const ProfileCard: React.SFC<IProfileCard> = (props) => {
  const { displayName, displayImage, logout } = props;
  return (
    <span className="profile-card">
      <img
        className="profile-card__image"
        src={displayImage}
        alt={displayName}
      />
      <p className="profile-card__name">{displayName}</p>
      <button className="profile-card__button" onClick={logout}>
        Logout
      </button>
    </span>
  );
};

export default ProfileCard;

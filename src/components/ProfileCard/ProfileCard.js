import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.scss';

const ProfileCard = ({ displayName, displayImage, logout }) => (
  <span className="profile-card">
    <img className="profile-card__image" src={displayImage} alt={displayName} />
    <p className="profile-card__name">{displayName}</p>
    <button className="profile-card__button" onClick={logout}>
      Logout
    </button>
  </span>
);

ProfileCard.propTypes = {
  displayName: PropTypes.string.isRequired,
  displayImage: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default ProfileCard;

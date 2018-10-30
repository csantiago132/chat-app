import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import slackChatLogo from '../../assets/branding/slack-chat-logo.png';

const Navigation = ({ items }) => {
  const navigationLinks = items.map((item) => (
    <Link
      key={item.name}
      className="main-header__navigation__links"
      to={`/${item.url}`}
      role="link"
    >
      {item.name}
    </Link>
  ));

  return (
    <header className="main-header">
      <nav className="main-header__navigation">
        <Link to="/">
          <img
            className="main-header__brand-logo"
            src={slackChatLogo}
            alt={slackChatLogo}
          />
        </Link>
        {navigationLinks}
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  items: PropTypes.array,
};

export default Navigation;

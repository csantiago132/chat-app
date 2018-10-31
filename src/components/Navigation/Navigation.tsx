/**
 * Navigation
 * 
 * Takes an array to render the links
 * 
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import slackChatLogoPng from  '../../assets/branding/slack-chat-logo.png';

interface INavigationContent {
  name: string;
  url: string;
}

interface INavigation {
  items: INavigationContent[];
}

const Navigation: React.SFC<INavigation> = ({ items }) => {
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
            src={slackChatLogoPng}
            alt={slackChatLogoPng}
          />
        </Link>
        {navigationLinks}
      </nav>
    </header>
  );
};

export default Navigation;

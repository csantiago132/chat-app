/**
 * Navigation
 *
 * Takes an array to render the links
 *
 */

import * as React from "react";
import { Link } from "react-router-dom";
import Styled from "./styles/Styled";
import slackChatLogoPng from "../../assets/branding/slack-chat-logo.png";

interface INavigationContent {
  name: string;
  url: string;
}

interface INavigation {
  items: INavigationContent[];
}

const Navigation: React.SFC<INavigation> = ({ items }) => (
  <Styled.Header>
    <Styled.Nav>
      <Link to="/">
        <Styled.Img src={slackChatLogoPng} alt={slackChatLogoPng} />
      </Link>
      {items.map((item) => (
        <Styled.A key={item.name} to={`/${item.url}`} role="link">
          {item.name}
        </Styled.A>
      ))}
    </Styled.Nav>
  </Styled.Header>
);

export default Navigation;

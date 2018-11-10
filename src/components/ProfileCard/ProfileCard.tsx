/**
 * ProfileCard
 *
 * Holds the current user signed-in and handles logout
 *
 */

import * as React from "react";
import Styled from "./styles/Styled";

interface IProfileCard {
  displayImage?: string;
  displayName?: string;
  logout?: (args: React.ButtonHTMLAttributes<any>) => void;
}

const ProfileCard: React.SFC<IProfileCard> = (props) => {
  const { displayName, displayImage, logout } = props;
  return (
    <Styled.Span>
      <Styled.Img src={displayImage} alt={displayName} />
      <Styled.P>{displayName}</Styled.P>
      <Styled.Button onClick={logout}>Logout</Styled.Button>
    </Styled.Span>
  );
};

export default ProfileCard;

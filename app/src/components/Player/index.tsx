import React from "react";

import { Card, WebName, FullName, Photo, Body } from "./index.styles";
import { FlexBox } from "../../app.styles";

interface Props {
  firstName: string;
  lastName: string;
  webName: string;
  totalPoints: number;
  lastMatchPoints: number;
  cost: number;
  photo: string;
  team: string;
}

const Player: React.FC<Props> = ({
  firstName,
  lastName,
  webName,
  totalPoints,
  lastMatchPoints,
  cost,
  photo,
  team,
}) => {
  return (
    <Card>
      <FlexBox justifyContent="center" flexDirection="column" alignItems="center">
        <WebName>{webName}</WebName>
        <FullName>
          {firstName} {lastName}
        </FullName>
      </FlexBox>
      <Body>
        points: {totalPoints} last match: {lastMatchPoints} cost: {cost} {team}
      </Body>
      <Photo src={photo} alt="player portrait" />
    </Card>
  );
};

export default Player;

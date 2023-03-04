import { useState } from "react";

import {
  ButtonInfoConteiner,
  InfoConteiner,
  ParagraphInfo,
} from "./Info.styled";

import { Button } from "../Button/Button";

import { IInfo } from "./types";

const countFollowers = (value: string) => {
  if (value === "tweets") {
    return value;
  } else {
    return value.slice(0, 3) + "," + value.split("").splice(3).join("");
  }
};

const ButtonInfo: React.FC<IInfo> = ({ followers, tweets }) => {
  const [isFollow, setIsFollow] = useState(false);

  if (isFollow) followers = String(parseFloat(followers) + 1);

  return (
    <ButtonInfoConteiner>
      <InfoConteiner>
        <ParagraphInfo>{tweets} tweets</ParagraphInfo>
        <ParagraphInfo>
          {followers.length > 5 ? countFollowers(followers) : followers}{" "}
          followers
        </ParagraphInfo>
      </InfoConteiner>

      <Button isFollow={isFollow} setFollow={setIsFollow} />
    </ButtonInfoConteiner>
  );
};

export { ButtonInfo };

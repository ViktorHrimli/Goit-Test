import { useState } from "react";

import {
  ButtonInfoConteiner,
  InfoConteiner,
  ParagraphInfo,
} from "./Info.styled";

import { Button } from "../Button/Button";

const arrayText = ["777 tweets", "100500 Followers"];

const ButtonInfo = () => {
  const [isFollow, setIsFollow] = useState(false);
  return (
    <ButtonInfoConteiner>
      <InfoConteiner>
        {arrayText.map((item, idx) => (
          <ParagraphInfo key={idx}>{item}</ParagraphInfo>
        ))}
      </InfoConteiner>

      <Button isFollow={isFollow} />
    </ButtonInfoConteiner>
  );
};

export { ButtonInfo };

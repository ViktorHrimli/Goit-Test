import { useState } from "react";

import {
  ButtonInfoConteiner,
  InfoConteiner,
  ParagraphInfo,
} from "./Info.styled";

import { Button } from "../Button/Button";

interface IObject {
  text: string;
  value: string;
}

const arrObj = [
  { text: "tweets", value: "777" },
  { text: "followers", value: "100500" },
];

const countFollowers = (item: IObject) => {
  if (item["text"] === "tweets") {
    return item.value;
  } else {
    return (
      item.value.slice(0, 3) + "," + item.value.split("").splice(3).join("")
    );
  }
};

const ButtonInfo = () => {
  const [isFollow, setIsFollow] = useState(false);

  return (
    <ButtonInfoConteiner>
      <InfoConteiner>
        {/*  */}
        {arrObj.map((item: IObject, idx) => (
          <ParagraphInfo key={idx}>{`${countFollowers(item) || item.value} ${
            item.text
          }`}</ParagraphInfo>
        ))}
        {/*  */}
      </InfoConteiner>

      <Button isFollow={isFollow} setFollow={setIsFollow} />
    </ButtonInfoConteiner>
  );
};

export { ButtonInfo };

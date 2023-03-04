import { useState } from "react";

import { ButtonFolow } from "./Button.styled";
type Props = {
  isFollow: boolean;
};

const Button: React.FC<Props> = ({ isFollow }) => {
  return (
    <ButtonFolow isFollow={isFollow}>
      {isFollow ? "Follow" : "Following"}
    </ButtonFolow>
  );
};
export { Button };

import { ButtonFolow } from "./Button.styled";

import { Props } from "./types";

const Button: React.FC<Props> = ({ isFollow, setFollow }) => {
  return (
    <ButtonFolow
      isFollow={isFollow}
      onClick={() => setFollow((prev: boolean) => !prev)}
    >
      {!isFollow ? "Follow" : "Following"}
    </ButtonFolow>
  );
};
export { Button };

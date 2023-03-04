import {
  CentralLine,
  CirculUserPhoto,
  ConteinerUserPhoto,
  UserPhoto,
  BackgroundPhoto,
} from "./UserSection.styled";

import { Props } from "./types";

const UserSection: React.FC<Props> = ({ avatar }) => {
  return (
    <ConteinerUserPhoto>
      <CirculUserPhoto>
        <BackgroundPhoto>
          <UserPhoto avatar={avatar} />
        </BackgroundPhoto>
      </CirculUserPhoto>
      <CentralLine></CentralLine>
    </ConteinerUserPhoto>
  );
};

export { UserSection };

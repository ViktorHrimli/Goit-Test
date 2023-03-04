import {
  CentralLine,
  CirculUserPhoto,
  ConteinerUserPhoto,
  UserPhoto,
  BackgroundPhoto,
} from "./UserSection.styled";

const UserSection = () => {
  return (
    <ConteinerUserPhoto>
      <CirculUserPhoto>
        <BackgroundPhoto>
          <UserPhoto />
        </BackgroundPhoto>
      </CirculUserPhoto>
      <CentralLine></CentralLine>
    </ConteinerUserPhoto>
  );
};

export { UserSection };

import { WrapperCard } from "./Card.styled";

import { ImageConteiner } from "../../components/ImageConteiner/ImageConteiner";
import { UserSection } from "../UserSection/UserSection";
import { ButtonInfo } from "../Info/Info";

import { IDataFetchUsers } from "../../types";

const Card: React.FC<IDataFetchUsers> = ({ avatar, followers, tweets }) => {
  return (
    <WrapperCard>
      <ImageConteiner />
      <UserSection avatar={avatar} />
      <ButtonInfo followers={followers} tweets={tweets} />
    </WrapperCard>
  );
};

export { Card };

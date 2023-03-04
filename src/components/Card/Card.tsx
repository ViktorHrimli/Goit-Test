import { WrapperCard } from "./Card.styled";

import { ImageConteiner } from "../../components/ImageConteiner/ImageConteiner";
import { UserSection } from "../UserSection/UserSection";
import { ButtonInfo } from "../ButtonInfo/ButtonInfo";

const Card = () => {
  return (
    <WrapperCard>
      <ImageConteiner />
      <UserSection />
      <ButtonInfo />
    </WrapperCard>
  );
};

export { Card };

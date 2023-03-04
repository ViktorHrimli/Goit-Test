import { HeroImageConteiner, GoitLogo } from "./ImageConteiner.styled";

// const hero = require("../../assets/hero.png");
const logo = require("../../assets/logoGoIt.jpg");

const ImageConteiner = () => {
  return (
    <>
      <GoitLogo>
        <img src={logo} alt="Logo" width={76} height={22} />
      </GoitLogo>
      <HeroImageConteiner>
        {/* <img src={hero} alt="Phot" width={308} height={168} /> */}
      </HeroImageConteiner>
    </>
  );
};

export { ImageConteiner };

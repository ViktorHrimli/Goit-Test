import styled from "styled-components";

const heroImg = require("../../assets/hero.png");
const logo = require("../../assets/logoGoIt.jpg");

const ImagesWrapper = styled.div`
  position: relative;
`;

const HeroImageConteiner = styled.div`
  width: 308px;
  height: 168px;

  background-image: url(${heroImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const GoitLogo = styled.div`
  position: absolute;

  width: 76px;
  height: 22px;

  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  top: -15px;
  left: -20px;
`;

export { HeroImageConteiner, GoitLogo, ImagesWrapper };

import styled from "styled-components";

import heroImg from "../../assets/hero.png";

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

  top: 20px;
  left: 20px;
`;

export { HeroImageConteiner, GoitLogo };

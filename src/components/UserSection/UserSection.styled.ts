import styled from "styled-components";

import { DefaultWrapper } from "../../styles/Global.styled";

const user = require("../../assets/Hansel.png");

const ConteinerUserPhoto = styled.div`
  position: relative;
`;

const CentralLine = styled.div`
  width: 380px;
  height: 8px;

  margin-top: 18px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

const CirculUserPhoto = styled(DefaultWrapper)`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -42%);

  flex-direction: row;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3;

  background: #ebd8ff;
`;

const BackgroundPhoto = styled(DefaultWrapper)`
  flex-direction: row;

  border-radius: 50%;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

const UserPhoto = styled.div`
  width: 63px;
  height: 63px;

  background-image: url(${user});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export {
  CentralLine,
  CirculUserPhoto,
  ConteinerUserPhoto,
  UserPhoto,
  BackgroundPhoto,
};

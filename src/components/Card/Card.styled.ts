import styled from "styled-components";

import { DefaultWrapper } from "../../styles/Global.styled";

const WrapperCard = styled(DefaultWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);

  justify-content: flex-start;

  padding: 28px 36px 36px 36px;

  width: 380px;
  height: 460px;

  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

const TextCard = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  text-transform: uppercase;
`;

export { WrapperCard, TextCard };

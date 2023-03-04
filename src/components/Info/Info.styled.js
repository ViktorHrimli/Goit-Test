import styled from "styled-components";

import { DefaultWrapper } from "../../styles/Global.styled";

const ButtonInfoConteiner = styled(DefaultWrapper)`
  margin-top: 66px;

  grid-gap: 26px;
`;

const InfoConteiner = styled(DefaultWrapper)`
  grid-gap: 16px;
`;

const ParagraphInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.09em;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export { ButtonInfoConteiner, InfoConteiner, ParagraphInfo };

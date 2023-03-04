import styled from "styled-components";

const ButtonFolow = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 196px;

  padding: 14px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.09em;
  text-transform: uppercase;

  border-radius: 10px;
  outline: none;
  border: none;

  color: #373737;
  background: ${(p) => (p.isFollow ? "#ebd8ff" : "#5CD3A8")};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export { ButtonFolow };

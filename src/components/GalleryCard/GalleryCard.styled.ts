import styled from "styled-components";

const ListCard = styled.ul`
  position: absolute;

  top: 50%;
  left: 0;

  transform: translate(0%, 30%);

  display: flex;
  border-radius: 6px;
  color: #333;

  padding: 1rem;

  overflow-x: auto;
  position: relative;

  grid-gap: 40px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { ListCard };

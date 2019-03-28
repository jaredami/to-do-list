import styled from "styled-components";

export default styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 18px;
  background-color: ${props => props.theme.accent};
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;
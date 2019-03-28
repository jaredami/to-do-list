import styled from "styled-components";

export default styled.input`
  display: block;
  width: 50%;
  float: none;
  margin: 0 auto;
  padding: 10px 18px;
  border: 4px solid ${props => props.theme.accent};
  border-radius: 4px;
`;

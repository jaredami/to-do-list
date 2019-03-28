import styled from "styled-components";
import { bounceIn } from "../styles/KeyFrames";

export default styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 18px;
  background-color: ${props => props.theme.accent};
  border: none;
  border-radius: 4px;
  animation: ${bounceIn} 1.5s both;
  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

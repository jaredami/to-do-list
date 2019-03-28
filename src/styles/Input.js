import styled from "styled-components";
import { bounceIn } from "../styles/KeyFrames";

export default styled.input`
  display: block;
  width: 50%;
  float: none;
  margin: 0 auto;
  padding: 10px 18px;
  border: 4px solid ${props => props.theme.accent};
  border-radius: 4px;
  animation: ${bounceIn} 1.2s both;
`;

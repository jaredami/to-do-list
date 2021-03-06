import styled from "styled-components";
import { bounceIn } from "../styles/KeyFrames";

export default styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 40px 80px;
  border-radius: 4px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.secondary};
  animation: ${bounceIn} 1.2s both;
`;

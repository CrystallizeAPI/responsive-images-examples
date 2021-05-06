import styled from "styled-components";
import { responsive } from "./../../lib/responsive";

export const Outer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
  background-size: 10px 10px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
`;

export const Inner = styled.div`
  max-width: 1400px;
  min-height: 100vh;

  padding: 0 100px;
  margin: 0 auto;
  ${responsive.sm} {
    padding: 0 50px;
  }
  ${responsive.xs} {
    padding: 0 25px;
  }
`;

export const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  picture {
    width: 100%;
    img {
      width: 100%;
    }
  }

  h1,
  h2 {
    padding-bottom: 30px;
    color: #575c65;
    font-size: 40px;
  }
`;

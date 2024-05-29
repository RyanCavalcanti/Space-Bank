import styled from "styled-components";
import theme from "../../../styles/Theme";
import { ContainerHome, ContainerProps } from "../../../styles/GlobalStyle";


export const SectionStyles = styled(ContainerHome)<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 100px;
  margin-top: 50px;

  @media(max-width: 992px) {
    flex-direction: column;
  }
`;

export const ArticleStyles = styled.article`
  display: flex;
  flex-direction: column;
`;

export const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > div {
    & > h3 {
      font-family: "Inter", sans-serif;
      font-size: 1.5rem;
      margin: 0;
      font-weight: 600;

      @media(max-width: 992px) {
        font-size: 1.1rem;
      }
    }
    & > p {
      font-family: "Inter", sans-serif;
      font-size: 1.1rem;
      margin: 0;
      margin-top: 10px;
    }
  }
`;

interface LinePinkProps {
  addMargin: boolean;
}

export const LinePink = styled.div<LinePinkProps>`
  width: 100%;
  height: 4px;
  background-color: ${theme.colors.Pink};
  margin-top: 20px;
  margin-bottom: ${({ addMargin }) => (addMargin ? "50px" : "0")};
`;

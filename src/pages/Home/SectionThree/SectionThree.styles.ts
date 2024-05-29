import styled from "styled-components";
import theme from "../../../styles/Theme";
import { ContainerHome } from "../../../styles/GlobalStyle";

export const SectionStyles = styled.section`
  background-color: ${theme.colors.Pink};
  margin-top: 100px;
`;

export const ContainerBox = styled(ContainerHome)`
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 1099px) {
    padding-bottom: 20px;
  }
`

export const ContainerArticle = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 32px 0px;
  gap: 24px;

  @media (max-width: 1099px) {
    flex-direction: column;
  }
`;

export const StyledArticle = styled.article<{ disabled?: boolean }>`
  background-color: ${theme.colors.White};
  border-radius: 4px;
  width: 25%;
  padding: 24px;
  visibility: ${({ disabled }) => (disabled ? "hidden" : "visible")};

  @media (max-width: 1100px) {
    display: ${({ disabled }) => (disabled ? "none" : "block")};
    width: 100%;
    margin-bottom: 20px;
  }
`;

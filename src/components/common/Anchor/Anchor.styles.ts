import styled from "styled-components";
import theme from "../../../styles/Theme";

export const NoneAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const TextAnchorBase = styled.a`
  text-decoration: none;
`;

export const TextAnchor = styled(TextAnchorBase)`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.Black};
  &:hover {
    color: ${theme.colors.Red};
  }
`;

export const ButtonBase = styled.a`
  border: none;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  padding: 15px 20px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  background-color: ${theme.colors.Black};
  color: ${theme.colors.White};
`;

export const SecondaryButton = styled(ButtonBase)`
  background-color: ${theme.colors.Red};
  color: ${theme.colors.White};
`;

export const TertiaryButton = styled(ButtonBase)`
  background-color: ${theme.colors.White};
  color: ${theme.colors.Red};
`;

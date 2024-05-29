import styled from 'styled-components';
import theme from '../../../styles/Theme';

export const ButtonBase = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
`;

export const NoneStylesButton = styled(ButtonBase)`
  background-color: inherit;
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

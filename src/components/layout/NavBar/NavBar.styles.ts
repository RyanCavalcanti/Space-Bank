import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/Theme';
import { ContainerHome, ContainerProps } from '../../../styles/GlobalStyle';
import { ToggleMenuContainerProps } from './NavBar';

export const HeaderStyles = styled(ContainerHome)<ContainerProps>`
  padding-top: 50px;
`;

export const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1099px) {
    flex-direction: column;
  }
`;

export const UlStyles = styled.ul`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
    list-style-type: none;
    gap: 30px;
  }
`;

export const ButtonGroup = styled.div`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
    gap: 10px;
  }
`;

export const ToggleMenu = styled.div`
  border: 1px solid ${theme.colors.Red};
  border-radius: 8px;
  padding: 10px;
  margin-left: 10px;
  background-color: transparent;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const LineToggleMenu = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 20px;
  margin: 4px 0px;
  background-color: ${theme.colors.Red};
  transform: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:first-child {
    transform: none;
  }
  &:last-child {
    transform: none;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ToggleMenuContainer = styled.div<ToggleMenuContainerProps>`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  animation: ${fadeOut} 0.5s ease;

  @media (max-width: 1099px) {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s ease;
  }
`;

export const UlStylesTwo = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  & > li {
    color: ${theme.colors.Red};
    margin-bottom: 8px;
  }
`;

export const ButtonGroupTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

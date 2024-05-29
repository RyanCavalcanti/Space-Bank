import styled from "styled-components";
import { ContainerHome, ContainerProps } from "../../../styles/GlobalStyle";

export const SectionStyles = styled(ContainerHome)<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 1099px) {
    margin-top: 50px;
  }
`

export const ContainerSection = styled.div`
  max-width: 100%;
`

export const UlStyles = styled.ul`
  list-style-type: none;
  display: grid;
  padding: 0;
  gap: 10px;

  & > li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
  }
  
  @media (min-width: 1099px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
  }

  @media (max-width: 1099px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(50px, auto);
  }
`;

export const StyledIcon = styled.img`
  width: 26px;
  height: 26px;
`;

export const ContainerBtnStyles = styled.div`
 display: flex;
 justify-content: space-between;
 
 @media(max-width: 1099px) {
  flex-direction: column;
 }

 & > aside {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0 110px;

  @media(max-width: 1099px) {
  margin-top: 20px;
 }
 }
`;

export const ImagemStyles = styled.nav`
    display: none;
  @media(min-width: 1100px){
    display: block;
  }
`;

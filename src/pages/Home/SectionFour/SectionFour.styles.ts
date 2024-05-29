import styled from "styled-components";
import { ContainerHome, ContainerProps } from '../../../styles/GlobalStyle';

export const SectionStyle = styled(ContainerHome)<ContainerProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 50px;
`

export const ImageBox = styled.div`
  margin: 50px 20px 30px;
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
    max-width: 500px; 
  }
`

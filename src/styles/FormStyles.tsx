import styled from "styled-components";
import theme from "./Theme";
import { ContainerHome, ContainerProps } from "./GlobalStyle";

export const ContainerFormStyles = styled(ContainerHome)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  min-height: 100vh;
`

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding: 50px;
  border-radius: 6px;
  background-color: ${theme.colors.Red};
`

export const LabelFormStyles = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.White};
`

export const InputFormStyles = styled.input`
  width: 100%;
  max-width: 700px;
  padding: 10px 0 10px 15px;
  border: none;
  border-radius: 8px;
  margin-bottom: 30px;
  background-color: ${theme.colors.White};
  font-weight: 600;
`

export const ErrorText = styled.div`
  color: ${theme.colors.White};
  font-size: 1.2rem;
  margin-top: 5px;
`;

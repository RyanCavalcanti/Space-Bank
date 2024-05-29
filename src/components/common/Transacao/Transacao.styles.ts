import styled from 'styled-components';
import theme from '../../../styles/Theme';

export const DivContainerStyles = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 690px){
    flex-direction: column;
  }
`

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 690px){
    width: 100%;
  }
`;

export const GrupoOpcoes = styled.select`
    background-color: ${theme.colors.White};
    border: 1px solid ${theme.colors.Red};
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    padding: 8px;
    margin-top: 30px;
`;

export const CampoValor = styled.input`
    background-color: ${theme.colors.White};
    border: 1px solid ${theme.colors.Red};
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 1rem;
    outline: none;
    padding: 8px;
    text-align: center;
    width: 70%;
    @media (max-width: 690px){
      width: 100%;
  }
`;

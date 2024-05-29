import styled from 'styled-components';
import theme from '../../../styles/Theme';

export const ExtratoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MonthStyles = styled.div`
  text-align: start;
`

export const InfosStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Linha = styled.div`
  & > hr {
    border: none;
    border-top: 1px solid ${theme.colors.Red};
    height: 2px;
    width: 100%;
  }
`

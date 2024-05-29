import styled from 'styled-components';
import theme from '../../../styles/Theme';

export const BtnScrollToTop = styled.button`
position: fixed;
bottom: 20px;
right: 20px;
background-color: ${theme.colors.Red};
color: ${theme.colors.White};
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
&:hover {
  opacity: 0.8;
}
`

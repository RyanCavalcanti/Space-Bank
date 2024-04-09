import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './Theme';

const GlobalStyleCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: 1rem;
    height: 100vh;
    color: ${theme.colors.Black};
    font-weight: 500;
  }

  #root {
    min-height: 100vh;
  }

  .content-container {
    width: 100%;
    box-sizing: border-box;
    margin: auto auto;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    background-color: transparent;
  }
`

export interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
}

export const ContainerHome = styled.div<ContainerProps>`
  max-width: 1280px;
  width: 100%;
  margin: auto auto;
  padding: 0px 20px;
`

export default function GlobalStyle() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleCSS />
    </ThemeProvider>
  )
}

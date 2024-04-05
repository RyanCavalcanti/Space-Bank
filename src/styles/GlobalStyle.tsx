import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './Theme';

const GlobalStyleCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: 1rem;
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

export default function GlobalStyle() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleCSS />
    </ThemeProvider>
  )
}

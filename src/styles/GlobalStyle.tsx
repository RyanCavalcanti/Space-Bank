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
    max-width: 1280px;
    width: 100%;
    box-sizing: border-box;
    margin: auto auto;

    @media (min-width: 992px) {
      padding: 0 1rem;
    }
    border: 1px solid #000; // tirar depois
    height: 100vh; // tirar depois
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    background-color: ${(props) => props.theme.colors.White};
  }
`

export default function GlobalStyle() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleCSS />
    </ThemeProvider>
  )
}

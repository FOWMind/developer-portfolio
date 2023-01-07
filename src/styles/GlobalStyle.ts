import { createGlobalStyle } from 'styled-components'

const colors = {
  mainBg: '#151515',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
  }

  body {
    font-family: 'Anybody', helvetica, sans-serif;
    background-color: ${colors.mainBg};
  }

  img {
    display: block;
    max-width: 100%;
  }
`

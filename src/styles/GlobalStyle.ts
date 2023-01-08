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
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Anybody', helvetica, sans-serif;
    background-color: ${colors.mainBg};
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  input,
  textarea {
    outline: none;
    border: 2px dashed transparent;
    border-bottom: 2px solid #cbcbcb;
    padding: 0 1rem;
    display: block;
    width: 100%;
    height: 50px;
    background-color: transparent;
    color: #fff;
    font: inherit;
    font-weight: 500;

    &::placeholder {
      color: #cbcbcb;
      text-transform: uppercase;
    }

    &:hover,
    &:focus,
    &:active {
      border-bottom-color: #73d5a8;
    }
  }
`

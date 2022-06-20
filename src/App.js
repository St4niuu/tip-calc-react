import React from 'react'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import Container from './components/Container'

const theme = {
  colors: {
    strongCyan: 'hsl(172, 67%, 45%)',
    veryDarkCyan: 'hsl(183, 100%, 15%)',
    darkGrayishCyan: 'hsl(186, 14%, 43%)',
    grayishCyan: 'hsl(184, 14%, 56%)',
    lightGrayishCyan: 'hsl(185, 41%, 84%)',
    veryLightGrayishCyan: 'hsl(189, 41%, 97%)'
  },
  sizes: {
    fontSize: '24px'
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
    font-size: ${theme.sizes.fontSize};
    font-weight: 700;
  }
  body {
    width: 100vw;
    height: 100vh;
    #root {
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.lightGrayishCyan};
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
      > img {
        margin-top: 2rem;
      }
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  `

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <img src='./images/logo.svg' alt='logo' />
      <Container theme={theme}/>
    </ThemeProvider>
  )
}

export default App

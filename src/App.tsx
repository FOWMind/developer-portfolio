import styled from 'styled-components'
import { AppContainer, Footer, Header, Presentation, Projects, Skills } from './components'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <Hero>
          <Header />
          <Presentation />
        </Hero>
        <Skills />
        <Projects />
      </AppContainer>
      <Footer />
    </>
  )
}

export default App

const Hero = styled.div`
  position: relative;
  overflow: hidden;
`

import { AppContainer, Header, Presentation, Projects, Skills } from './components'
import { GlobalStyle } from './styles'

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Presentation />
      <Skills />
      <Projects />
    </AppContainer>
  )
}

export default App

import styled from 'styled-components'
import manSmiling from '../assets/man-smiling.png'
import { FeaturedText, Headline, Image, Paragraph, Button } from './'

export function Presentation() {
  return (
    <PresentationStyled>
      <PresentationImage src={manSmiling} alt="Man smiling in black and white image." width="auto" draggable={false} />
      <PresentationHeadline>
        Nice to meet you!
        <br />
        I'm <FeaturedText>Adam Keyes</FeaturedText>.
      </PresentationHeadline>
      <PresentationDesc>
        Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
      </PresentationDesc>
      <PresentationButton>Contact me</PresentationButton>
    </PresentationStyled>
  )
}

const PresentationStyled = styled.section`
  text-align: center;
`

const PresentationImage = styled(Image)`
  max-width: 20rem;
  margin: 0 auto;
`

const PresentationHeadline = styled(Headline)`
  margin-top: 2rem;
`

const PresentationDesc = styled(Paragraph)`
  margin: 1rem auto 1rem auto;
`

const PresentationButton = styled(Button)``

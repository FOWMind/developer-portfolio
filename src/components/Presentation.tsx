import styled from 'styled-components'
import manSmiling from '../assets/man-smiling.png'
import { desktopSize, tabletSize } from '../utils'
import { FeaturedText, Headline, Image, Paragraph, Button } from './'

export function Presentation() {
  return (
    <PresentationStyled>
      <PresentationImage src={manSmiling} alt="Man smiling in black and white image." width="auto" draggable={false} />
      <PresentationContent>
        <PresentationHeadline>
          Nice to meet you!
          <br /> I'm <FeaturedText>Adam Keyes</FeaturedText>.
        </PresentationHeadline>
        <PresentationDesc>
          Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
        </PresentationDesc>
        <PresentationButton>Contact me</PresentationButton>
      </PresentationContent>
    </PresentationStyled>
  )
}

const PresentationStyled = styled.section`
  text-align: center;
  padding-top: 2rem;

  @media screen and (min-width: ${tabletSize}) {
    text-align: left;
    padding: 8rem 0 0 2rem;
  }

  @media screen and (min-width: ${desktopSize}) {
    padding-left: 0;
  }
`

const PresentationImage = styled(Image)`
  max-width: 20rem;
  margin: 0 auto 2rem auto;

  @media screen and (min-width: ${tabletSize}) {
    margin-bottom: 0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    height: 100%;
    object-fit: cover;
  }
`

const PresentationContent = styled.div`
  @media screen and (min-width: ${tabletSize}) {
    max-width: 35rem;

    br {
      display: none;
    }
  }
`

const PresentationHeadline = styled(Headline)`
  @media screen and (min-width: ${tabletSize}) {
    position: relative;
    z-index: 20;
  }
`

const PresentationDesc = styled(Paragraph)`
  margin: 2rem auto 2rem auto;

  @media screen and (min-width: ${tabletSize}) {
    margin-left: 0;
    margin-right: 0;
  }
`

const PresentationButton = styled(Button)``

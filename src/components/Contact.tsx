import styled from 'styled-components'
import { desktopSize } from '../utils'
import { Button, Headline, Input, Paragraph, Textbox } from './'

export function Contact() {
  return (
    <ContactStyled>
      <ContactText>
        <ContactHeadline>Contact</ContactHeadline>
        <ContactParagraph>
          I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to
          you as soon as possible.
        </ContactParagraph>
      </ContactText>

      <ContactForm>
        <ContactInput placeholder="Name" />
        <ContactInput placeholder="Email" />
        <ContactTextbox placeholder="Message" />
        <ContactButton>Send message</ContactButton>
      </ContactForm>
    </ContactStyled>
  )
}

export const ContactStyled = styled.section`
  overflow: hidden;
  max-width: 30rem;
  margin: 0 auto;

  @media screen and (min-width: ${desktopSize}) {
    max-width: initial;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

const ContactText = styled.div`
  text-align: center;

  @media screen and (min-width: ${desktopSize}) {
    text-align: left;
    width: 60%;
  }
`

const ContactHeadline = styled(Headline)``

const ContactParagraph = styled(Paragraph)`
  margin: 1rem auto 2rem auto;

  @media screen and (min-width: ${desktopSize}) {
    margin-left: 0;
    margin-right: 0;
  }
`

const ContactForm = styled.div`
  @media screen and (min-width: ${desktopSize}) {
    width: 40%;
  }
`

const ContactInput = styled(Input)`
  margin-bottom: 2rem;
`

const ContactTextbox = styled(Textbox)`
  margin-bottom: 2rem;
`

const ContactButton = styled(Button)`
  float: right;
`

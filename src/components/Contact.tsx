import styled from 'styled-components'
import { Button, Headline, Input, Paragraph, Textbox } from './'

export function Contact() {
  return (
    <ContactStyled>
      <ContactHeadline>Contact</ContactHeadline>
      <ContactParagraph>
        I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you
        as soon as possible.
      </ContactParagraph>

      <ContactInput placeholder="Name" />
      <ContactInput placeholder="Email" />
      <ContactTextbox placeholder="Message" />

      <ContactButton>Send message</ContactButton>
    </ContactStyled>
  )
}

export const ContactStyled = styled.section`
  text-align: center;
  overflow: hidden;
  max-width: 30rem;
  margin: 0 auto;
`

const ContactHeadline = styled(Headline)``

const ContactParagraph = styled(Paragraph)`
  margin: 1rem auto 2rem auto;
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

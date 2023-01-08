import styled from 'styled-components'
import { Contact, Logo, SocialItems } from './'

export function Footer() {
  return (
    <FooterStyled>
      <Contact />
      <FooterContent>
        <Logo />
        <SocialItems />
      </FooterContent>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  padding: 2rem;
  background-color: #242424;
`

const FooterContent = styled.div`
  text-align: center;
  margin-top: 4rem;
  border-top: 2px solid #cbcbcb;
  padding: 2rem 0;
`

import styled from 'styled-components'
import { tabletSize } from '../utils'
import { Contact, PersonalInfo } from './'

export function Footer() {
  return (
    <FooterStyled>
      <Contact />
      <FooterContent>
        <PersonalInfo />
      </FooterContent>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  padding: 2rem;
  padding-bottom: 0;
  background-color: #242424;

  @media screen and (min-width: ${tabletSize}) {
    padding: 4rem 2rem;
    padding-bottom: 0;
  }
`

const FooterContent = styled.div`
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 2px solid #cbcbcb;
`

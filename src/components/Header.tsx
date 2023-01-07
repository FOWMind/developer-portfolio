import styled from 'styled-components'
import { Logo, SocialItems } from './'

export function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <SocialItems />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  text-align: center;
`

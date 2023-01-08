import styled from 'styled-components'
import { tabletSize } from '../utils'
import { PersonalInfo } from './'

export function Header() {
  return (
    <HeaderStyled>
      <PersonalInfo />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding: 2rem;

  @media screen and (min-width: ${tabletSize}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
`

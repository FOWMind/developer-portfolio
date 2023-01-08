import styled from 'styled-components'
import { tabletSize } from '../../utils'

export function Logo() {
  return <LogoStyled>adamkeyes</LogoStyled>
}

const LogoStyled = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: lowercase;
  margin-bottom: 1rem;

  @media screen and (min-width: ${tabletSize}) {
    margin-bottom: 0;
  }
`

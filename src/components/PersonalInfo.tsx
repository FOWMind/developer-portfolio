import styled from 'styled-components'
import { tabletSize } from '../utils'
import { Logo, SocialItems } from './'

export function PersonalInfo() {
  return (
    <PersonalInfoStyled>
      <Logo />
      <SocialItems />
    </PersonalInfoStyled>
  )
}
const PersonalInfoStyled = styled.div`
  text-align: center;

  @media screen and (min-width: ${tabletSize}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

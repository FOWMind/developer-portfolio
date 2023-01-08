import styled from 'styled-components'
import { tabletSize } from '../../utils'

export const Headline = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;

  @media screen and (min-width: ${tabletSize}) {
    font-size: 3.5rem;
  }
`

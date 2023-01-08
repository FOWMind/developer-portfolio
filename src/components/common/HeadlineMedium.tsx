import styled from 'styled-components'
import { tabletSize } from '../../utils'
import { Headline } from './Headline'

export const HeadlineMedium = styled(Headline).attrs((props) => ({
  as: 'h2',
  ...props,
}))`
  font-size: 1.75rem;

  @media screen and (min-width: ${tabletSize}) {
    font-size: 2.25rem;
  }
`

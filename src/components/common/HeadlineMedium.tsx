import styled from 'styled-components'
import { Headline } from './Headline'

export const HeadlineMedium = styled(Headline).attrs((props) => ({
  as: 'h2',
  ...props,
}))`
  font-size: 1.75rem;
`

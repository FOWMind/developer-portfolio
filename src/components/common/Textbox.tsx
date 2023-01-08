import styled from 'styled-components'
import { Input } from './'

export const Textbox = styled(Input).attrs((props) => ({
  ...props,
  as: 'textarea',
}))`
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 500px;
  overflow: auto;
`

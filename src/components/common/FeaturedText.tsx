import styled from 'styled-components'

export const FeaturedText = styled.span`
  display: inline-block;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #73d5a8;
  }
`

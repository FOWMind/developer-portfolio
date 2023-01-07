import styled from 'styled-components'

interface ImageProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  draggable?: string | boolean
}

export const Image = styled.img<ImageProps>`
  user-select: none;
`

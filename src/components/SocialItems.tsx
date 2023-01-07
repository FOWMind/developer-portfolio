import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { SiFrontendmentor } from 'react-icons/si'
import styled from 'styled-components'

export function SocialItems() {
  return (
    <SocialItemsStyled>
      <SocialItem href="https://github.com/" target="_blank">
        <AiFillGithub />
      </SocialItem>
      <SocialItem href="https://frontendmentor.io/" target="_blank">
        <SiFrontendmentor />
      </SocialItem>
      <SocialItem href="https://linkedin.com/" target="_blank">
        <AiFillLinkedin />
      </SocialItem>
      <SocialItem href="https://twitter.com/" target="_blank">
        <AiOutlineTwitter />
      </SocialItem>
    </SocialItemsStyled>
  )
}

const SocialItemsStyled = styled.div`
  svg {
    color: #fff;
    width: 25px;
    height: 25px;
  }
`

const SocialItem = styled.a`
  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`

import styled from 'styled-components'
import { Work } from '../models/Work'
import { desktopSize, tabletSize } from '../utils'
import { Button, HeadlineSmall, Image, Paragraph } from './'

export function WorkItem({ title, technologies, links, images }: Work) {
  return (
    <WorkItemStyled>
      <WorkItemPreview src={images.preview} alt={''} height={'250'} />
      <WorkItemTitle>{title}</WorkItemTitle>
      {technologies && (
        <WorkItemTags>
          {technologies.map((tech, i) => (
            <WorkItemTag key={i}>{tech}</WorkItemTag>
          ))}
        </WorkItemTags>
      )}

      {links?.repository && (
        <WorkItemLink as="a" href={links.repository}>
          View code
        </WorkItemLink>
      )}
      {links?.demo && (
        <WorkItemLink as="a" href={links.demo}>
          View project
        </WorkItemLink>
      )}
    </WorkItemStyled>
  )
}

const WorkItemStyled = styled.div`
  margin-bottom: 2rem;

  @media screen and (min-width: ${tabletSize}) {
    width: 48%;
    margin-right: 4%;
    margin-bottom: 4rem;

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }
`

const WorkItemPreview = styled(Image)`
  margin-bottom: 1rem;
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;

  @media screen and (min-width: ${desktopSize}) {
    max-height: 500px;
  }
`

const WorkItemTitle = styled(HeadlineSmall).attrs((props) => ({
  ...props,
  as: 'h4',
}))`
  text-transform: uppercase;
`

const WorkItemTags = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`

const WorkItemTag = styled(Paragraph).attrs((props) => ({
  ...props,
  as: 'li',
}))`
  list-style-type: none;
  font-size: 1.15rem;
  text-transform: uppercase;
  margin-right: 1rem;
`

const WorkItemLink = styled(Button).attrs((props) => ({
  ...props,
  as: 'a',
}))`
  margin-right: 2rem;
`

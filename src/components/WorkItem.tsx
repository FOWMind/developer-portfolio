import styled from 'styled-components'
import { Work } from '../models/Work'
import { Button, HeadlineSmall, Image, Paragraph } from './'

export function WorkItem({ title, technologies, links, images }: Work) {
  return (
    <WorkItemStyled>
      <WorkItemPreview src={images.preview} alt={''} height={'250'} />
      <WorkItemTitle>{title}</WorkItemTitle>
      {technologies && (
        <WorkItemTags>
          {technologies.map((tech) => (
            <WorkItemTag>{tech}</WorkItemTag>
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
`

const WorkItemPreview = styled(Image)`
  margin-bottom: 1rem;
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
`

const WorkItemTitle = styled(HeadlineSmall)`
  text-transform: uppercase;
`

const WorkItemTags = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`

const WorkItemTag = styled(Paragraph)`
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
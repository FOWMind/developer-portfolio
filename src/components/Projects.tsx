import styled from 'styled-components'
import { Button, Headline, Works } from './'

export function Projects() {
  return (
    <ProjectsStyled>
      <ProjectsHeader>
        <Headline>Projects</Headline>
        <Button>Contact me</Button>
      </ProjectsHeader>

      <Works />
    </ProjectsStyled>
  )
}

const ProjectsStyled = styled.section`
  padding: 2rem 0;
`

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

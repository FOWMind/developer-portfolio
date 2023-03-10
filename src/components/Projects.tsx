import styled from 'styled-components'
import { desktopSize } from '../utils'
import { Button, Headline, Works } from './'

export function Projects() {
  return (
    <ProjectsStyled>
      <ProjectsHeader>
        <ProjectsHeadline>Projects</ProjectsHeadline>
        <Button>Contact me</Button>
      </ProjectsHeader>

      <Works />
    </ProjectsStyled>
  )
}

const ProjectsStyled = styled.section`
  padding: 2rem;

  @media screen and (min-width: ${desktopSize}) {
    padding-left: 0;
    padding-right: 0;
  }
`

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

const ProjectsHeadline = styled(Headline).attrs((props) => ({
  ...props,
  as: 'h3',
}))``

import styled from 'styled-components'
import { desktopSize, tabletSize } from '../utils'
import { HeadlineMedium, Hr, Paragraph } from './'

export function Skills() {
  return (
    <SkillsStyled>
      <SkillsHr />

      <Skill>
        <SkillContent>
          <SkillName>HTML</SkillName>
          <SkillExperience>4 Years Experience</SkillExperience>
        </SkillContent>
      </Skill>

      <Skill>
        <SkillContent>
          <SkillName>CSS</SkillName>
          <SkillExperience>4 Years Experience</SkillExperience>
        </SkillContent>
      </Skill>

      <Skill>
        <SkillContent>
          <SkillName>Javascript</SkillName>
          <SkillExperience>4 Years Experience</SkillExperience>
        </SkillContent>
      </Skill>

      <Skill>
        <SkillContent>
          <SkillName>Accessibility</SkillName>
          <SkillExperience>4 Years Experience</SkillExperience>
        </SkillContent>
      </Skill>

      <Skill>
        <SkillContent>
          <SkillName>React</SkillName>
          <SkillExperience>3 Years Experience</SkillExperience>
        </SkillContent>
      </Skill>

      <Skill>
        <SkillContent>
          <SkillName>Sass</SkillName>
          <SkillExperience>3 Years Experience</SkillExperience>
        </SkillContent>
      </Skill>

      <SkillsHr />
    </SkillsStyled>
  )
}

const SkillsStyled = styled.section`
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;

  @media screen and (min-width: ${tabletSize}) {
    text-align: left;
    margin: 4rem auto;
    padding: 2rem;
    padding-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media screen and (min-width: ${desktopSize}) {
    padding-left: 0;
    padding-right: 0;
  }
`

const SkillsHr = styled(Hr)`
  margin: 2rem 0;

  &:last-of-type {
    display: none;
  }
`

const Skill = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${tabletSize}) {
    width: 45%;
  }

  @media screen and (min-width: ${desktopSize}) {
    width: 30%;
  }
`

const SkillContent = styled.div`
  display: inline-block;
`

const SkillName = styled(HeadlineMedium)`
  @media screen and (min-width: ${tabletSize}) {
    margin-bottom: 1rem;
  }
`

const SkillExperience = styled(Paragraph)``

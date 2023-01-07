import styled from 'styled-components'
import { HeadlineMedium, Paragraph } from './'

export function Skills() {
  return (
    <SkillsStyled>
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
    </SkillsStyled>
  )
}

const SkillsStyled = styled.section`
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  border: 2px solid #cbcbcb;
  border-left: none;
  border-right: none;
`

const Skill = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`

const SkillContent = styled.div`
  display: inline-block;
`

const SkillName = styled(HeadlineMedium)``

const SkillExperience = styled(Paragraph)``

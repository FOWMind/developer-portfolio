import styled from 'styled-components'
import { tabletSize } from '../utils'
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

  @media screen and (min-width: ${tabletSize}) {
    text-align: left;
    border-bottom: none;
    max-width: calc(100% - 4rem);
    margin: 4rem auto;
    padding: 4rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

const Skill = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${tabletSize}) {
    min-width: 45%;
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

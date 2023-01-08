import styled from 'styled-components'
import { useState } from 'react'
import { WorkItem } from './WorkItem'
import { Work } from '../models/Work'
import { Work as workData } from '../data/Work'
import { tabletSize } from '../utils'

export function Works() {
  const [works, setWorks] = useState<Work[]>(workData)

  return (
    <WorksStyled>
      {works.map((work, i) => (
        <WorkItem key={work.id || i} {...work} />
      ))}
    </WorksStyled>
  )
}

const WorksStyled = styled.div`
  @media screen and (min-width: ${tabletSize}) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

import styled from 'styled-components'
import { useState } from 'react'
import { WorkItem } from './WorkItem'
import { Work } from '../models/Work'
import { Work as workData } from '../data/Work'

export function Works() {
  const [works, setWorks] = useState<Work[]>(workData)

  return (
    <WorksStyled>
      {works.map((work) => (
        <WorkItem {...work} />
      ))}
    </WorksStyled>
  )
}

const WorksStyled = styled.div``

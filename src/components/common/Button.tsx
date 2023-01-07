import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: ReactNode
}

export const Button = styled.button<ButtonProps>`
  outline: 2px dashed transparent;
  border: none;
  border-bottom: 2px solid #73d5a8;
  display: inline-block;
  padding: 0.5rem 0;
  background-color: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;

  &:hover {
    color: #73d5a8;
    transition: color 0.15s;
  }
`

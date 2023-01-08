import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: ReactNode
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: 2px dashed transparent;
  display: inline-block;
  padding: 0.8rem 0;
  background-color: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #73d5a8;
    transition: color 0.15s;

    &::before {
      bottom: 5px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background-color: #73d5a8;
    transition: bottom 0.15s;
  }
`

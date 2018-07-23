import React from 'react'
import styled from 'styled-components'

import { blue1, BROWN, WHITE, GREY2, BOX_SHADOW } from '../../styles'

const fontColor = color => `
  color: ${color};
  h2 {
    color: ${color};
  }
  h3 {
    color: ${color};
  }
  p {
    color: ${color};
  }
`
const Card = styled.div`
  ${props =>
    props.small
      ? `
    padding: 30px;
  `
      : `
    padding: 60px 0 40px 0;
  `}
  ${props => {
    switch (props.bg) {
      case 'dark':
        return `
    background-color: ${blue1()};
    border: solid 1px ${BROWN};
    ${fontColor(WHITE)}
  `
      case 'darkGrey':
        return `
    background-color: ${GREY2};
    ${fontColor(WHITE)}
  `
      default:
        return `
    background-color: ${WHITE};
    ${fontColor(GREY2)}
  `
    }
  }}

  ${props => {
    switch (props.border) {
      case 'white':
        return 'border: solid 2px rgba(255, 255, 255, 0.9);'
      case 'shadow':
        return BOX_SHADOW
    }
  }}
`

export default Card

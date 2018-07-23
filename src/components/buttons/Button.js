import React from 'react'
import styled from 'styled-components'
import { BLUE2, CALLTOACTIONRED, FONT_FAMILY } from '../../styles'

const StyleButtonFontSize = props => {
  if (props.extraLarge) {
    return 22
  } else if (props.large) {
    return 20
  } else {
    return 18
  }
}

export default styled(({ extraLarge, large, ...props }) => (
  <button {...props} />
))`
  ${FONT_FAMILY}
  font-size: ${StyleButtonFontSize}px;
  background-color: ${props => (props.cta ? CALLTOACTIONRED : BLUE2)};
  font-weight: ${props => (props.cta ? 'bold' : '')};
  border-radius: 2px;
  box-shadow: 0 18px 29px -2px rgba(0, 0, 0, 0.26);
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  text-align: center;
  color: #ffffff;
  padding: 5px 10px;
`

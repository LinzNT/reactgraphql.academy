import React from 'react'
import { Button, ButtonOutline } from 'rebass'
import styled from 'styled-components'
import { BLUE2, CALLTOACTIONRED, FONT_FAMILY } from '../../styles'

const StyleButtonFontSize = props => {
  if (props.extraLarge) {
    return 20
  } else if (props.large) {
    return 16
  } else {
    return 12
  }
}

export default styled(({ extraLarge, large, ...props }) => (
  <Button {...props} />
))`
  font-size: ${StyleButtonFontSize}px;
  background-color: ${props => (props.cta ? CALLTOACTIONRED : BLUE2)};
  border-radius: 0;
  ${FONT_FAMILY}
  font-weight: ${props => (props.cta ? 'bold' : '')};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  text-align: center;
  color: #ffffff;
`

export const ButtonSecondary = styled(({ extraLarge, large, ...props }) => (
  <ButtonOutline {...props} />
))`
  font-size: ${StyleButtonFontSize}px;
  width: 223px;
  height: 58px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border: solid 1px #002938;
  color: ${BLUE2};
`

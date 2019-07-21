import React from 'react'
import styled from 'styled-components'
import {
  space,
  color,
  typography,
  border,
  shadow,
  layout,
  position,
  compose,
} from 'styled-system'
import { DARK_GREY } from '../../config/styles'

export const StyledBox = styled('div')(
  compose(
    space,
    color,
    typography,
    border,
    shadow,
    layout,
    position
  )
)

const Box = React.forwardRef(({ children, ...rest }, ref) => {
  const props = {
    ...rest,
    as: rest.box || rest.as || rest.undefined,
  }

  return (
    <StyledBox {...props} ref={ref}>
      {children}
    </StyledBox>
  )
})

Box.displayName = 'Box'
Box.defaultProps = {
  fontFamily: 'barlow',
  fontWeight: 'normal',
  color: DARK_GREY,
}

export default Box

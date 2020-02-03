import React from 'react'
import styled from 'styled-components'
import { Box } from '@leanjs/academy-ui'
import { getVariantProps } from '../utils'

const StyledUl = styled(Box)`
  ${({ variant, variants = [] }) =>
    (variant === 'unstyled' || variants.find(v => v === 'unstyled')) &&
    `
    > li {
      list-style-type: none;
      margin-bottom: 7px;
    }
  `}
  ${({ variant, variants = [] }) =>
    (variant === 'inline' || variants.find(v => v === 'inline')) &&
    `
    > li {
      padding: 8px;
      margin: 0;
      display: inline-block;
      :first-child {
        padding-left: 0;
      }
      :last-child {
        padding-right: 0;
      }
    }
  `};
`

const Ul = ({ sx = {}, ...rest }) => (
  <StyledUl
    box="ul"
    sx={{
      ...getVariantProps(rest.variant || rest.variants, ulVariantProps),
      ...sx,
    }}
    {...rest}
  />
)
// Ul.defaultProps = {
//   box: 'ul',
// }

const ulVariantProps = {
  inline: {
    m: 0,
    p: 0,
  },
  unstyled: {
    ml: 0,
  },
}

// const Li = styled(Box)``
// Li.defaultProps = {
//   box: 'li',
// }
const Li = props => <Box box="li" {...props} />

export { Ul, Li }
export default Ul

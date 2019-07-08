import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import Link from '../navigation/Link'
import {
  defaultButtonStyle,
  buttonVariantProps,
  buttonDefaultProps,
} from './Button'
import { ExternalLinkIcon, PdfDownload } from '../../components/icons'

const StyledLinkButton = styled(Link)`
  text-decoration: none;
  ${defaultButtonStyle}
  ${props => props.external && 'justify-content: space-evenly;'};
  ${props => props.margin && space({ mt: 5 })}
  ${props =>
    props.pdf &&
    `
    svg {
      margin-right: 0.5rem
    }
    display: flex
    justify-content: space-evenly;
    align-items: center;
    `}
`

StyledLinkButton.displayName = 'StyledLinkButton'

const LinkButton = ({
  trackUserBehaviour: trackUserBehaviourProp,
  children,
  variant,
  ...props
}) => (
  <StyledLinkButton
    role="button"
    {...props}
    {...(variant ? buttonVariantProps[variant] : {})}
  >
    {props.pdf ? <PdfDownload /> : null}
    {props.external ? (
      <ExternalLinkIcon style={{ marginRight: '1.5rem' }} />
    ) : null}
    {children}
  </StyledLinkButton>
)

LinkButton.propTypes = {
  variant: PropTypes.string,
}

LinkButton.defaultProps = {
  ...buttonDefaultProps,
}

export default LinkButton

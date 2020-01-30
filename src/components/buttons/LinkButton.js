import React from 'react'
import styled from 'styled-components'

import Link from '../navigation/Link'
import {
  defaultButtonStyle,
  buttonVariantProps,
  buttonDefaultProps,
} from './Button'
import { ExternalLinkIcon, PdfDownload } from '../../components/icons'

const StyledLinkButton = styled(Link)`
  ${defaultButtonStyle}
  text-decoration: none;
`
StyledLinkButton.displayName = 'StyledLinkButton'

const { sx = {}, ...buttonDefaultRestProps } = buttonDefaultProps

StyledLinkButton.defaultProps = {
  ...buttonDefaultRestProps,
  sx: {
    ...sx,
    display: 'inline-flex',
    alignItems: 'center',
  },
}

const LinkButton = ({
  trackUserBehaviour: trackUserBehaviourProp,
  children,
  variant,
  ...props
}) => {
  return (
    <StyledLinkButton
      role="button"
      {...(variant ? buttonVariantProps[variant] : {})}
      {...props}
    >
      {props.pdf ? <PdfDownload sx={{ mr: 3 }} /> : null}
      {props.external ? <ExternalLinkIcon sx={{ mr: 3 }} /> : null}
      {children}
    </StyledLinkButton>
  )
}

LinkButton.defaultProps = {
  variant: 'default',
}

export default LinkButton

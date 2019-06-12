/* eslint no-restricted-globals: 0 */

import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'
import { Link as DefaultLinkScroll, scroller } from 'react-scroll'
import { FONT_FAMILY } from '../../config/styles'
import { DARK_GREY } from '../../config/styles'
import Box from '../layout/Box'

export const DEFAULT_SCROLL_OFFSET = -125
export const DEFAULT_SCROLL_DURATION = 500

export const ANCHOR_STYLE = css`
  cursor: pointer;
  color: blue;
  text-decoration: ${({ underline = true }) =>
    underline ? 'underline' : 'none'};
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  color: ${DARK_GREY};
  text-shadow: 0px 0px 1px ${DARK_GREY};
  ${FONT_FAMILY}
`

const StyledLink = styled(Box)`
  ${ANCHOR_STYLE};
`

export const styleChildLinkColor = color => `
  a {
    color: ${color};
    text-shadow: 0px 0px 1px ${color};
  }
  a:link {
    color: ${color};
  }
  a:visited {
    color: ${color};
  }
  a:hover {
    color: ${color};
  }
  a:active {
    color: ${color};
  }
`

DefaultLinkScroll.defaultProps = {
  smooth: true,
  duration: DEFAULT_SCROLL_DURATION,
  offset: DEFAULT_SCROLL_OFFSET,
  box: DefaultLinkScroll,
}

class Link extends React.Component {
  componentDidMount() {
    const hash = location.hash.substr(1)
    if (hash && hash === this.props.name) {
      // adds smooth scrolling to anchor links
      setTimeout(() => {
        window.scrollTo(0, 0)
        scroller.scrollTo(hash, {
          smooth: true,
          duration: DEFAULT_SCROLL_DURATION,
          offset: DEFAULT_SCROLL_OFFSET,
        })
      }, 100)
    }
  }

  render() {
    const { to = '', children = '', ...rest } = this.props
    const toHref = to || rest.href
    if (toHref && toHref.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
      const { target = '_blank' } = rest
      rest.rel = target === '_blank' ? 'noopener' : undefined
      return (
        <StyledLink {...rest} box="a" target={target} href={toHref}>
          {children}
        </StyledLink>
      )
    } else if (toHref && toHref[0] === '#') {
      const { onClick, ...restLinkScrollProps } = rest

      return (
        <StyledLink
          {...restLinkScrollProps}
          onClick={e => {
            onClick && onClick()
          }}
          to={toHref}
          box={DefaultLinkScroll}
        >
          {children}
        </StyledLink>
      )
    } else if (!to) {
      return (
        <StyledLink {...rest} box="a">
          {children}
        </StyledLink>
      )
    } else {
      // this two attrs where causing an anoying error while developing...
      // GatsbyLink does not support strange props
      delete rest.variant

      // The destination URLs need to have trailing slashes for Gatsby prefetching to happen
      const dest =
        to.slice(-1) === '/' || to.indexOf('?') > -1 || to.indexOf('#') > -1
          ? to
          : to + '/'

      return (
        <StyledLink {...rest} to={dest} box={GatsbyLink}>
          {children}
        </StyledLink>
      )
    }
  }
}

export default Link

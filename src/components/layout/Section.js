import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { DARK_BLUE, DARK_GREY } from '../../config/styles'

const Section = styled.section`
  padding-top: ${props => (props.top ? '50px' : '30px')};
  padding-bottom: 30px;
  p:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ${props => {
    if (props.xsBgDark) {
      return css`
        @media (max-width: ${SCREEN_XS_MAX}) {
          background-color: ${DARK_BLUE};
        }
      `
    } else if (props.xsBgDarkGrey) {
      return css`
        @media (max-width: ${SCREEN_XS_MAX}) {
          background-color: ${DARK_GREY};
        }
      `
    }
  }};
`

Section.displayName = 'Section'

export const TopSection = styled(Section)`
  position: relative;
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : '-258')}px;
  }
`

TopSection.displayName = 'TopSection'

export default Section

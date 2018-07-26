import React from 'react'
import styled from 'styled-components'
import { Blockquote } from '../text'
import { Image } from '../elements'
import { reactBlue, GREY2, FONT_FAMILY } from '../../config/styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'

const Card = styled.div`
  background-color: ${reactBlue()};
  display: flex;
  @media (min-width: ${SCREEN_SM_MIN}) {
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
  }
  @media (max-width: ${SCREEN_SM_MAX}) {
    flex-direction: column-reverse;
  }
`

const StyledBlockquote = styled(Blockquote)`
  flex-grow: 1;
  @media (min-width: ${SCREEN_SM_MIN}) {
    padding: 5px 10px;
  }
`

const Text = styled.div`
  ${FONT_FAMILY} margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: 17px;
  font-weight: 500;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.9px;
  color: ${GREY2};
`
const Profile = styled.div`
  padding: 5px;
`
const Picture = styled(Image)`
  @media (min-width: ${SCREEN_SM_MIN}) {
    max-width: 250px;
    max-height: 250px;
    border-radius: 50%;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    margin: 20px auto 0;
  }
`

const AttendeeQuote = ({
  quote,
  fullname,
  company,
  job,
  profilePicUrl,
  ...props
}) => (
  <Card {...props}>
    <Text>
      <StyledBlockquote>
        {quote || 'This is a quote from a trainee.'}
      </StyledBlockquote>
      <Profile>
        <strong>
          {fullname || 'Joe Bloggs'}, {job || 'CTO'} - {company || 'Freelance'}{' '}
        </strong>
      </Profile>
    </Text>
    <Picture src={profilePicUrl} />
  </Card>
)

export default AttendeeQuote

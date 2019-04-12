import React from 'react'
import styled from 'styled-components'
import { H3, P } from '../text'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'

const StyledCorpTrainingFacts = styled.div`
  h3 {
    margin-top: 1rem;
  }
`

const CorpTrainingFacts = () => (
  <StyledCorpTrainingFacts>
    <H3>Level expertise across your team</H3>
    <P>
      If you're looking to change your tech stack, avoiding risk is key. So
      knowing developers are on the same level of expertise can really help with
      forward planning.
    </P>
    <P>
      Aimed at developers with{' '}
      <strong>at least 1 year's experience with JavaScript</strong> , our
      training is a deep dive into React, GraphQL or React Native.
    </P>
    <H3>How tailored is training?</H3>
    <P>
      As any training progresses and we discover issues your developers have, we
      quickly adapt our learning methods to ensure meaningful learning.
    </P>
    <H3>Pricing, locations, scheduling </H3>
    <P>
      We have run private trainings worldwide and work around your schedule.
    </P>
    <P>
      For pricing information, it's best to{' '}
      <Link to="mailto:hello@reactjs.academy">email us</Link> to get a tailored
      quote but our <strong>Key Facts PDF</strong> has information regarding
      pricing too.
    </P>
    <LinkButton primary>Team Training - Key Facts (PDF)</LinkButton>
  </StyledCorpTrainingFacts>
)

export default CorpTrainingFacts

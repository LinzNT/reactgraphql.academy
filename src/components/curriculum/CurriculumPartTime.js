import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import { H1Ref, H2, H3 } from '../text'
import P from '../layout/P'
import Section from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './sessions/ES6Session'
import IntroReactSession from './sessions/IntroReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import GraphQLSession from './sessions/GraphQLSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsAndRenderPropsSession from './sessions/HoCsAndRenderPropsSession'
import { CALLTOACTIONRED, FONT_FAMILY } from '../../styles'

const PartTimeFinalProject = () => (
  <Ul>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice extreme programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const BootcampCard = styled.div`
  background-color: ${CALLTOACTIONRED};
  padding: 2em;
  color: #ffffff
  margin-top: 2em;
  ${FONT_FAMILY}
`

const CurriculumPartTime = () => (
  <div>
    <Col xs={12} md={12} lg={10} lgOffset={1}>
      <H1Ref>
        The most progressive curriculum out there{' '}
        <a href="#curriculum" name="curriculum">
          #
        </a>
      </H1Ref>

      <Row>
        <Col xs={12} md={6}>
          <Section subTitle="Session 1 - ES6">
            <ES6Session />
          </Section>
          <Section subTitle="Session 2 - Thinking in React">
            <IntroReactSession />
          </Section>
          <Section subTitle="Session 3 - Routing & Data Fetching">
            <RoutingAndDataFetchingSession />
          </Section>
          <Section subTitle="Session 4 - Forms & Auth">
            <FormsAndAuthSession />
          </Section>
          <Section subTitle="Session 5 - Recap React Fundamentals">
            <ReactFundamentalsRecapSession />
          </Section>
          <Section subTitle="Session 6 - Styling in React">
            <StylingInReactSession />
          </Section>
        </Col>
        <Col xs={12} md={6}>
          <Section subTitle="Session 7 - Introduction to Redux">
            <IntroReduxSession />
          </Section>
          <Section subTitle="Session 8 - Introduction to Testing in JS">
            <TestingIntroSession />
          </Section>
          <Section subTitle="Session 9 - Testing in React">
            <TestingInReactSession />
          </Section>
          <Section subTitle="Session 10 - Advanced Patterns I">
            <HoCsAndRenderPropsSession />
          </Section>
          <Section subTitle="Session 11 - GraphQL & Apollo Client">
            <GraphQLSession />
          </Section>
          <Section subTitle="Session 12 - Last session React mini hackathon">
            <PartTimeFinalProject />
          </Section>
        </Col>
      </Row>
      <BootcampCard>
        <Row>
          <Col lg={5} lgOffset={1}>
            <span>
              Looking for the most complete React curriculum? Our 1-week
              bootcamp has it...
            </span>
          </Col>
          <Col lg={6} center>
            <LinkButton secondary>1 week bootcamp >></LinkButton>
          </Col>
        </Row>
      </BootcampCard>
    </Col>
  </div>
)

export default CurriculumPartTime

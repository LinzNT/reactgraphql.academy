import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { H1Ref, H2, H3 } from '../text'
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
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import GraphQLSession from './sessions/GraphQLSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsAndRenderPropsSession from './sessions/HoCsAndRenderPropsSession'
import CompoundCompAndContextSession from './sessions/CompoundCompAndContextSession'
import ServerSideRenderingSession from './sessions/ServerSideRenderingSession'
import Hackathon from './sessions/Hackathon'

const CurriculumBootcamp = () => (
  <div>
    <Row>
      <Col xs={12} md={12} lg={10} lgOffset={1}>
        <H1Ref>
          The most complete curriculum out there{' '}
          <a href="#curriculum" name="curriculum">
            #
          </a>
        </H1Ref>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <Section
          title="Bootcamp Day 1"
          subTitle="ES6 & ESNEXT, Thinking in React, Routing & Data Fetching"
        >
          <ES6Session title="ES6 and ESNEXT" />
          <IntroReactSession title="Thinking in React" />
          <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
        </Section>
        <Section
          title="Bootcamp Day 2"
          subTitle="Forms, Authentication, Styling in React"
        >
          <FormsAndAuthSession title="Forms and Authentication" />
          <ReactFundamentalsRecapSession
            title="React Fundamentals recap, build a React app from scratch on your own to
            consolidate:"
          />
          <StylingInReactSession title="Styling in React" />
        </Section>
        <Section
          title="Bootcamp Day 3"
          subTitle="Redux, and Testing Principles"
        >
          <IntroReduxSession title="Introduction to Redux" />
          <TestingIntroSession title="Testing Principales" />
        </Section>
      </Col>
      <Col xs={12} md={6} lg={5}>
        <Section
          title="Bootcamp Day 4"
          subTitle="Functional Programming, Advanced Patterns I, GraphQL, and Advanced Redux"
        >
          <HoCsAndRenderPropsSession title="FP & Advanced React Patterns I" />
          <GraphQLSession title="GraphQL and Apollo client" />
          <AdvancedReduxSession title="Advanced Redux" />
        </Section>
        <Section
          title="Bootcamp Day 5"
          subTitle="Testing in React, Advanced React Patterns II, Server-side Rendering"
        >
          <TestingInReactSession title="Testing in React" />
          <CompoundCompAndContextSession
            title="Advanced React patterns to create even more reusable
          UIs"
          />
          <ServerSideRenderingSession title="Server Side Rendering (SSR) with React" />
        </Section>
        <Section title="Bootcamp Day 6" subTitle="Hackathon">
          <Hackathon
            title="Last day real-world React challenge. We'll implement an app
          in teams from scratch"
          />
        </Section>
      </Col>
    </Row>
  </div>
)

export default CurriculumBootcamp

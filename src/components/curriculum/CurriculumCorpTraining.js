import React from 'react'
import Link from '../navigation/Link'
import { H2Ref, P } from '../text'
import Section, { List, curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ES6Session from './sessions/ES6Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import GraphQLSession from './sessions/GraphQLSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import CompoundCompAndContextSession from './sessions/CompoundCompAndContextSession'
import ServerSideRenderingSession from './sessions/ServerSideRenderingSession'
import { LinkButton } from '../buttons'
import SectionCTA from './SectionCTA'
import { REACT_BOOTCAMP } from '../../config/data'

const CurriculumBootcamp = ({
  showTitle = true,
  list,
  isOpen,
  enableToggle,
  toggleNavigateTo = `/curriculum?tab=${REACT_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = true,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    isOpen,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="React Bootcamp Day 1"
        name="day1"
        subTitle="Modern JavaScript, Thinking in React, Routing & Data Fetching"
      >
        <ES6Session title="Modern JavaScript" />
        <ThinkingInReactSession title="Thinking in React" />
        <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 2"
        name="day2"
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
        {...commonProps}
        title="React Bootcamp Day 3"
        name="day3"
        subTitle="Redux, and Testing Principles"
      >
        <IntroReduxSession title="Introduction to Redux" />
        <TestingIntroSession title="Testing Principales" />
      </Section>
      {marketingCard}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="React Bootcamp Day 4"
        name="day4"
        subTitle="Functional Programming, Advanced React patterns I, and GraphQL"
      >
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns I" />
        <GraphQLSession title="GraphQL and Apollo client" />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 5"
        name="day5"
        subTitle="Real-world Testing in React, Advanced React Patterns II, and SSR"
      >
        <TestingInReactSession title="Testing in React" />
        <CompoundCompAndContextSession
          title="Advanced React patterns to create even more reusable
          UIs"
        />
        <ServerSideRenderingSession title="Server Side Rendering (SSR)" />
      </Section>
      {showLinkToCurriculum ? (
        <SectionCTA>
          <LinkButton secondary to="/curriculum">
            Full curriculum>>
          </LinkButton>
        </SectionCTA>
      ) : null}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H2Ref>
            Example corporate curriculum
            <Link to="#curriculum" name="curriculum">
              #
            </Link>
          </H2Ref>
          <P>
            This curriculum is the foundation from which we teach your team. We
            may adapt our training so you get the best training possible for
            your company's needs.
          </P>
        </Col>
      </Row>
      {list ? (
        <List>
          {firstHalf}
          {secondHalf}
        </List>
      ) : (
        <Row>
          <Col md={6}>{firstHalf}</Col>
          <Col md={6}>{secondHalf}</Col>
        </Row>
      )}
    </React.Fragment>
  )
}

export default CurriculumBootcamp

import React from 'react'
import Link from '../navigation/Link'
import { H2Ref, H4 } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ES6Session from './sessions/ES6Session'
import ReactJS101Session from './sessions/ReactJS101Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/design/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import E2ESession from './sessions/E2ESession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import Hackathon from './sessions/Hackathon'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import { Li } from '../layout/Ul'

import { LinkButton } from '../buttons'
import SectionCTA from './SectionCTA'
import { REACT_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

const CurriculumReactBootcamp = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = true,
  trainings,
  showHackathon = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_BOOTCAMP
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
  const firstHalf = (
    <React.Fragment>
      <H4>Course outline:</H4>
      <Section
        {...commonProps}
        title="Evening pre-bootcamp (optional)"
        name="day0"
        subTitle="React 101 and JS fundamentals"
      >
        <ReactJS101Session />
      </Section>
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
      {marketingCard}
      {showLinkToCurriculum && showHackathon && (
        <SectionCTA>
          <LinkButton to={`/react/curriculum?tab=${REACT_BOOTCAMP}`}>
            Full curriculum
          </LinkButton>
        </SectionCTA>
      )}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="React Bootcamp Day 3"
        name="day3"
        subTitle="Redux Fundamentals, Advanced Redux, and FP"
      >
        <IntroReduxSession title="Redux Fundamentals" />
        <AdvancedReduxSession title="Advanced Redux" />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 4"
        name="day4"
        subTitle="Advanced React patterns, Hooks, and performance"
      >
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns" />
        <ReactPerformanceSession title="Performance" />
      </Section>
      <Section
        {...commonProps}
        title="React Bootcamp Day 5"
        name="day5"
        subTitle="Real-world Testing in React"
      >
        <TestingIntroSession title="Testing Foundation in JS" />
        <TestingInReactSession title="Testing in React" />
        <E2ESession title="End-to-End Testing" />
      </Section>
      {showHackathon ? (
        <Section
          type={type}
          enableToggle={true}
          title="React Bootcamp Day 6 (optional)"
          name="day6"
          subTitle="GraphQL and final project"
        >
          <Hackathon />
        </Section>
      ) : (
        <SectionCTA>
          <LinkButton to={`/react/curriculum?tab=${REACT_BOOTCAMP}`}>
            Full curriculum
          </LinkButton>
        </SectionCTA>
      )}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              React Bootcamp Curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({
        firstHalf,
        secondHalf,
        layout,
        type,
        trainings,
      })}
    </React.Fragment>
  )
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li></Li>
  </React.Fragment>
)

export const LearningObjectives = () => (
  <React.Fragment>
    <Li>
      Understand the core principles and libraries to build production-ready
      React applications using:{' '}
      <code>
        react, react-router, styled-components, styled-system, storybook, redux,
        react-redux
      </code>
    </Li>
    <Li>
      Be able to develop and test complex and reliable React applications:{' '}
      <code>enzyme, jest</code>
    </Li>
    <Li>
      Comprehend modern front-end JavaScript:{' '}
      <code>Functional Programming, Webpack</code>
    </Li>
    <Li>
      Understand the best practices and patterns for building real-world
      performant React applications
    </Li>
  </React.Fragment>
)

CurriculumReactBootcamp.LearningObjectives = LearningObjectives
CurriculumReactBootcamp.TargetAudienceList = TargetAudienceList

export default CurriculumReactBootcamp

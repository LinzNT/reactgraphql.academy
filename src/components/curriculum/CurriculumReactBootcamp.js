import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import ES6Session from './sessions/ES6Session'
import ReactJS101Session from './sessions/ReactJS101Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import HooksSession from './sessions/HooksSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import E2ESession from './sessions/E2ESession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import AdvancedUIPatterns from './sessions/AdvancedUIPatterns'
import DesignSystemSession from './sessions/DesignSystemSession'
import { Li } from '../layout/Ul'

import { REACT_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { trainingTime } from '../utils'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'

const CurriculumReactBootcamp = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = true,
  trainings,
  training,
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
      <Section
        {...commonProps}
        title={`Evening pre-bootcamp`}
        name="day0"
        subTitle={`React JS 101`}
        trainingTime={trainingTime({ day: 0, training })}
      >
        <ReactJS101Session />
      </Section>
      <Section
        {...commonProps}
        title={`Day 1`}
        name="day1"
        subTitle={`Modern JavaScript, Thinking in React, Routing & Data Fetching`}
        trainingTime={trainingTime({ day: 1, training })}
      >
        <ES6Session />
        <ThinkingInReactSession />
        <RoutingAndDataFetchingSession />
      </Section>
      <Section
        {...commonProps}
        title={`Day 2`}
        name="day2"
        subTitle={`Forms, Authentication, and Hooks`}
        trainingTime={trainingTime({ day: 2, training })}
      >
        <FormsAndAuthSession />
        <ReactFundamentalsRecapSession
          title="React Fundamentals recap, build a React app from scratch on your own to
          consolidate:"
        />
        <HooksSession />
      </Section>
      <Section
        {...commonProps}
        title={`Day 3`}
        name="day3"
        subTitle={`Redux Fundamentals, Advanced Redux, and FP`}
        trainingTime={trainingTime({ day: 3, training })}
      >
        <IntroReduxSession />
        <AdvancedReduxSession title="Advanced Redux" />
      </Section>
      {marketingCard ? React.cloneElement(marketingCard, { type }) : null}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title={`Day 4`}
        name="day4"
        subTitle={`Advanced React patterns, Hooks, and performance`}
        trainingTime={trainingTime({ day: 6, training })}
      >
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns" />
        <ReactPerformanceSession title="Performance" />
      </Section>
      <Section
        {...commonProps}
        title={`Day 5`}
        name="day5"
        subTitle={`Advanced UI Patterns & Styling in React`}
        trainingTime={trainingTime({ day: 7, training })}
      >
        <AdvancedUIPatterns title="Advanced UI Patterns" />
        <StylingInReactSession />
        <DesignSystemSession title="Design Systems" />
      </Section>
      <Section
        {...commonProps}
        title={`Day 6`}
        name="day6"
        subTitle={`Real-World Testing in React`}
        trainingTime={trainingTime({ day: 8, training })}
      >
        <TestingIntroSession />
        <TestingInReactSession />
        <E2ESession title="End-to-End Testing" />
      </Section>
    </React.Fragment>
  )
  const title = showTitle ? (
    <H2Ref>
      React Bootcamp Curriculum{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    layout,
    type,
    title,
    trainings,
    curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
  })
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer{' '}
      <strong>
        interested in becoming quickly a productive React developer
      </strong>{' '}
      capable to work on real-world React projects.
    </Li>
    <Li>
      You are interested in intense training for extremely rapid learning by
      focusing on one thing during one week.
    </Li>
    <Li>
      Ideal for experienced programmers familiar with good practices. Not for
      beginner devs!
    </Li>
    <Li>
      You learn by doing. This is a hands-on project-based training - most of
      the time you'll be coding.
    </Li>
    <Li>
      You think code reviews and pair programming are useful and you are
      interested in getting feedback on your coding.
    </Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
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
      Learn how to style React applications in an idiomatic way and encourage
      design consistency using design systems.
    </Li>
    <Li>
      Understand different state management approaches in the React ecosystem.
    </Li>
    <Li>
      Create a solid foundation to leverage the React principles when tackling
      complex problems using advanced React.
    </Li>
    <CurriculumAdvancedReact.LearningObjectivesList />
  </React.Fragment>
)

CurriculumReactBootcamp.LearningObjectivesList = LearningObjectivesList
CurriculumReactBootcamp.TargetAudienceList = TargetAudienceList

export default CurriculumReactBootcamp

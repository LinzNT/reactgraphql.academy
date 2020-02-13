import React from 'react'
import ES6Session from '../sessions/ES6Session'
import ThinkingInReactSession from '../sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from '../sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from '../sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from '../sessions/FormsAndAuthSession'
import StylingInReactSession from '../sessions/StylingInReactSession'
import HooksSession from '../sessions/HooksSession'
import IntroReduxSession from '../sessions/IntroReduxSession'
import TestingIntroSession from '../sessions/TestingIntroSession'
import TestingInReactSession from '../sessions/TestingInReactSession'
import AdvancedReactPatternsSession from '../sessions/AdvancedReactPatternsSession'
import ReactPerformanceSession from '../sessions/ReactPerformanceSession'
import FundamentalsFinalProject from '../sessions/FundamentalsFinalProject'
import AdvancedUIPatterns from '../sessions/AdvancedUIPatterns'
import DesignSystemSession from '../sessions/DesignSystemSession'

import { REACT_BOOTCAMP } from '../../../config/data'
import Curriculum, { renderSection } from '../Curriculum'

export const sessionsFirstHalf = [
  {
    subTitle: 'Thinking in React, Modern JavaScript, Routing & Data Fetching',
    comps: [ThinkingInReactSession, ES6Session, RoutingAndDataFetchingSession],
  },
  {
    subTitle: 'Forms, Authentication, and Hooks',
    comps: [FormsAndAuthSession, HooksSession, ReactFundamentalsRecapSession],
  },
  {
    subTitle: 'Redux Fundamentals, deployment to production',
    comps: [IntroReduxSession, FundamentalsFinalProject],
  },
]
export const sessionsSecondHalf = [
  {
    subTitle: 'Advanced React patterns and performance',
    comps: [AdvancedReactPatternsSession, ReactPerformanceSession],
  },
  {
    subTitle: 'Styling in React and Design Systems',
    comps: [StylingInReactSession, AdvancedUIPatterns, DesignSystemSession],
  },
  {
    subTitle: 'Real-World Testing in React',
    comps: [TestingIntroSession, TestingInReactSession],
  },
]

const CurriculumReactBootcamp = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  training,
  section = {},
  ...rest
}) => {
  const type = REACT_BOOTCAMP
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionArgs = {
    training,
    sectionProps,
  }

  return (
    <Curriculum
      title="React Bootcamp Outline"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          ...renderSectionArgs,
          initialDayOffset: sessionsFirstHalf.length,
        })
      )}
    />
  )
}

export default CurriculumReactBootcamp

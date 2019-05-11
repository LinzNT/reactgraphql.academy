import React from 'react'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import { ONE_DAY_WORKSHOP } from '../../config/data'
import { H2Ref } from '../text'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

const CurriculumOneDayWorkshops = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${ONE_DAY_WORKSHOP}`,
  marketingCard = null,
  showLinkToCurriculum = false,
  trainings,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = ONE_DAY_WORKSHOP
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
    trainings,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Styling in React and Design Systems"
        name="styling"
        subTitle="See how React can look gorgeous and encourage design consistency"
      />
      <Section
        {...commonProps}
        title="React Fundamentals & ModernJS"
        name="fundamentals"
        subTitle="Learn the basics of React and jumpstart your way into a new coding ecosystem"
      />
      <Section
        {...commonProps}
        title="React Hooks & Suspense"
        name="hooksAndSuspense"
        subTitle="Learn 2 of the newest and most exciting features in React"
      />
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Performance & FP in React"
        name="perfAndFP"
        subTitle="Discover best practice for permonant React apps"
      />
      <Section
        {...commonProps}
        title="React with GraphQL client"
        name="reactGraphqlClient"
        subTitle="Consume GraphQL APIs in any React application"
      />
      <Section
        {...commonProps}
        title="Testing in React"
        name="testingReact"
        subTitle="Ensure consistent, reliable code across the React ecosystem"
      />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Design Systems & styling in React{' '}
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

export default CurriculumOneDayWorkshops

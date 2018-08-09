import React from 'react'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import Section, { List } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ReactNativeFoundationSession from './sessions/ReactNativeFoundationSession'
import ReactNativeGesturesSession from './sessions/ReactNativeGesturesSession'
import ReactNativeAnimationsSession from './sessions/ReactNativeAnimationsSession'

const CurriculumReactNative = ({ showTitle = true, list, showToggle, isOpen = true }) => {
  const firstHalf = (
    <Section
      showToggle={showToggle}
      title="React Native Day 1"
      subTitle="Foundation, Animations, and Gestures"
      isOpen={isOpen}
    >
      <ReactNativeFoundationSession title="Foundation" />
      <ReactNativeAnimationsSession title="Animations" />
      <ReactNativeGesturesSession title="Gestures" />
    </Section>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={1}>
            <H1Ref>
              React Native Curriculum
            <Link to="#curriculum" name="curriculum">
                #
            </Link>
            </H1Ref>
          </Col>
        </Row>
      ) : (
          ''
        )}
      {list ? (
        <List>
          {firstHalf}
        </List>
      ) : (
          <Row>
            <Col md={6} lg={5} lgOffset={1}>
              {firstHalf}
            </Col>
          </Row>
        )}
    </React.Fragment>
  )
}

export default CurriculumReactNative

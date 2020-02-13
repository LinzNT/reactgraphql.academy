import React from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import CurriculumReactBootcamp from './CurriculumReactBootcamp'
import CurriculumReactFundamentals from './CurriculumReactFundamentals'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'
import CurriculumReactWorkshops from './CurriculumReactWorkshops'

import CurriculumGraphQLBootcamp from './CurriculumGraphQLBootcamp'
import selectUpcomingTrainings from '../training/selectUpcomingTrainings'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  REACT_FUNDAMENTALS,
  GRAPHQL_BOOTCAMP,
  REACT_WORKSHOP,
} from '../../config/data'

const FullCurriculumsReact = ({ trainings }) => {
  const allGraphQLBootcamps = selectUpcomingTrainings({
    trainings,
    types: [GRAPHQL_BOOTCAMP],
  })
  const allReactWorkshops = selectUpcomingTrainings({
    trainings,
    types: [REACT_WORKSHOP],
  })

  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H4>Choose a React Course</H4>
        </Col>
      </Row>
      <Tabs defaultValue={REACT_BOOTCAMP}>
        <TabList lgOffset={1}>
          <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
          <TabItem name={ADVANCED_REACT}>Advanced React</TabItem>
          <TabItem name={REACT_FUNDAMENTALS}>React Fundamentals</TabItem>
          <TabItem name={REACT_WORKSHOP}>Workshops</TabItem>
          <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
        </TabList>

        <TabContent>
          <ContentItem name={REACT_BOOTCAMP}>
            <CurriculumReactBootcamp {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={REACT_FUNDAMENTALS}>
            <CurriculumReactFundamentals {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={ADVANCED_REACT}>
            <CurriculumAdvancedReact {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={REACT_WORKSHOP}>
            <CurriculumReactWorkshops
              trainings={allReactWorkshops}
              showTitle={false}
            />
          </ContentItem>
          <ContentItem name={GRAPHQL_BOOTCAMP}>
            <CurriculumGraphQLBootcamp trainings={allGraphQLBootcamps} />
          </ContentItem>
        </TabContent>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsReact

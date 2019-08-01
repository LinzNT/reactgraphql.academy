import React from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import CurriculumReactBootcamp from './CurriculumReactBootcamp'
import CurriculumReactFundamentals from './CurriculumReactFundamentals'
import CurriculumPartTime from './CurriculumPartTime'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'

import CurriculumReactWorkshops from './CurriculumReactWorkshops'
import { selectUpcomingTrainings } from '../training/UpcomingTrainings'
import {
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT,
  ONE_DAY_WORKSHOP,
  REACT_FUNDAMENTALS,
  REACT_WORKSHOP,
} from '../../config/data'

const FullCurriculumsReact = ({ trainings }) => {
  const allReactWorkshops = selectUpcomingTrainings({
    trainings,
    types: [ONE_DAY_WORKSHOP, REACT_WORKSHOP],
  })

  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }
  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H4>Select React Curriculum:</H4>
        </Col>
      </Row>
      <Tabs defaultValue={REACT_BOOTCAMP}>
        <TabList lgOffset={1}>
          <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
          <TabItem name={PART_TIME}>Part-time Course</TabItem>
          <TabItem name={ADVANCED_REACT}>Advanced React</TabItem>
          <TabItem name={REACT_FUNDAMENTALS}>React Fundamentals</TabItem>
          <TabItem name={ONE_DAY_WORKSHOP}>1-Day Workshops</TabItem>
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
          <ContentItem name={PART_TIME}>
            <CurriculumPartTime {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={ONE_DAY_WORKSHOP}>
            <CurriculumReactWorkshops
              trainings={allReactWorkshops}
              showTitle={false}
            />
          </ContentItem>
        </TabContent>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsReact

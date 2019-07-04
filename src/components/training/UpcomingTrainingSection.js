import React, { useState } from 'react'
import styled from 'styled-components'

import { formatUTC } from '../utils'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2Ref, H3, P } from '../text'
import { TrainingItem } from './'
import Link from '../navigation/Link'
import { getUpcomingTrainingsByType } from './UpcomingTrainings'
import Newsletter from '../elements/Newsletter'
import { GREY } from '../../config/styles'
import {
  Tabs,
  TabList,
  TabItem,
  TabContent,
  ContentItem,
} from '../../components/layout/Tabs'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  PART_TIME,
  REACT_NATIVE,
  REACT_WORKSHOP,
  ONE_DAY_WORKSHOP,
  REACT_FUNDAMENTALS,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  MEETUP,
} from '../../config/data'
import CorporateTrainingCard from '../elements/CorporateTrainingCard'

const CorporateCrossSell = styled.div`
  border: 3px dotted ${GREY};
  max-height: 78px;
  max-width: 100%;
  display: block;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  a,
  p {
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
  }
`

export const UpcomingTrainings = ({
  curriculum,
  type,
  trainings,
  className,
}) => {
  const filteredTrainings = getUpcomingTrainingsByType({
    types: [...type],
    trainings,
  })
  if (!filteredTrainings.length || !filteredTrainings[0].id) {
    return <P>Sorry! There are no {type} dates confirmed.</P>
  } else {
    return filteredTrainings.map(training => {
      const formatedDate = formatUTC(
        training.startDate,
        training.utcOffset,
        'D MMM'
      )
      const dayMonth = formatedDate ? formatedDate.split(' ') : ['', '']
      const trainingInstance = (
        <TrainingItem
          key={training.id}
          cityCountry={training.cityCountry}
          startDay={dayMonth[0]}
          startMonth={dayMonth[1]}
          type={training.type}
          title={training.title}
          path={training.toPath}
          className={className}
        />
      )
      return (
        <React.Fragment key={training.id}>
          {curriculum ? trainingInstance : <Col md={4}>{trainingInstance}</Col>}
        </React.Fragment>
      )
    })
  }
}

const UpcomingTrainingSection = ({
  curriculum,
  type,
  trainings,
  removeAdditionalCTAs = false,
}) => {
  const [activeTab, setActiveTab] = useState(REACT_BOOTCAMP)
  const reactTrainings = getUpcomingTrainingsByType({
    trainings,
    types: [
      REACT_BOOTCAMP,
      ADVANCED_REACT,
      PART_TIME,
      REACT_NATIVE,
      REACT_WORKSHOP,
      REACT_FUNDAMENTALS,
      ONE_DAY_WORKSHOP,
    ],
  })
  const graphqlTrainings = getUpcomingTrainingsByType({
    trainings,
    types: [GRAPHQL_BOOTCAMP, GRAPHQL_API, GRAPHQL_CLIENT],
  })
  const meetups = getUpcomingTrainingsByType({
    trainings,
    types: [MEETUP],
  })

  return (
    <React.Fragment>
      {curriculum ? (
        <React.Fragment>
          <Link to="#upcoming-courses" name="upcoming-courses" />
          <H3 mt={3}>Upcoming dates:</H3>
          <UpcomingTrainings
            type={type}
            curriculum={curriculum}
            trainings={trainings}
            className="upcoming-courses-upcoming-dates"
          />
          <Link className="upcoming-courses-upcoming-dates" to="#upcoming">
            See all upcoming courses
          </Link>
          {!removeAdditionalCTAs && (
            <React.Fragment>
              <Row>
                <Link
                  to="#free-learning-resources"
                  name="free-learning-resources"
                />
                <Col md={10}>
                  <Newsletter />
                </Col>
              </Row>
              <Row>
                <Link to="#corporate-training" name="corporate-training" />
                <Col md={10}>
                  <CorporateTrainingCard type={type} />
                </Col>
              </Row>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <Section>
          <Grid>
            <Row>
              <Col md={10} mdOffset={1}>
                <H2Ref>
                  Upcoming - All Events
                  <Link to="#upcoming" name="upcoming">
                    #
                  </Link>
                </H2Ref>
              </Col>
            </Row>
            <Row>
              <Col md={11} mdOffset={1}>
                <Tabs active={activeTab} onChange={setActiveTab}>
                  <TabList>
                    <TabItem name={REACT_BOOTCAMP}>React Courses</TabItem>
                    <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Courses</TabItem>
                    <TabItem name={MEETUP}>Meetups</TabItem>
                  </TabList>
                  <TabContent>
                    <ContentItem name={REACT_BOOTCAMP}>
                      <Row>
                        <UpcomingTrainings
                          className="upcoming-courses-all-courses"
                          trainings={reactTrainings}
                        />
                        <CorporateCrossSell>
                          <P>
                            <strong>Corporate team training</strong>
                          </P>
                          <Link to="/react/training/corporate/">
                            Find out more
                          </Link>
                        </CorporateCrossSell>
                      </Row>
                    </ContentItem>

                    <ContentItem name={GRAPHQL_BOOTCAMP}>
                      <Row>
                        <UpcomingTrainings trainings={graphqlTrainings} />
                        <CorporateCrossSell>
                          <P>
                            <strong>Corporate team training</strong>
                          </P>
                          <Link to="/graphql/training/corporate/">
                            Find out more
                          </Link>
                        </CorporateCrossSell>
                      </Row>
                    </ContentItem>

                    <ContentItem name={MEETUP}>
                      <Row>
                        <UpcomingTrainings trainings={meetups} />
                      </Row>
                    </ContentItem>
                  </TabContent>
                </Tabs>
              </Col>
            </Row>
          </Grid>
        </Section>
      )}
    </React.Fragment>
  )
}

export default UpcomingTrainingSection

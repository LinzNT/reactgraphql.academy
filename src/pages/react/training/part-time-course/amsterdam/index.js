import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { CurriculumPartTime } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  TargetAudienceSection,
  ALEX_LOBERA,
  ROY_DERKS,
  selectNthTraining,
  selectUpcomingTrainings,
  getUpcomingTrainingsByType,
  AlternativeTrainings,
} from 'src/components/training'
import Header from 'src/components/layout/Header'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Breadcrumb } from 'src/components/navigation'
import {
  PART_TIME,
  AMSTERDAM,
  ONE_DAY_WORKSHOP,
  REACT_BOOTCAMP,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import BlogSection from 'src/components/blog/BlogSection'

const PartTimeAmsterdam = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const partTimeTrainings = selectUpcomingTrainings({
        trainings,
        type: PART_TIME,
        city: AMSTERDAM,
      })
      const training = selectNthTraining({ trainings: partTimeTrainings })
      const crossSellTrainings = getUpcomingTrainingsByType({
        trainings,
        types: [ONE_DAY_WORKSHOP, REACT_BOOTCAMP],
      })
      return (
        <React.Fragment>
          <Helmet
            title="Part-time React Course in Amsterdam"
            meta={[
              {
                name: 'description',
                content: 'Part-time React Courses in Amsterdam.',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/part-time-course',
                label: 'Part Time Course',
              },
              {
                to: '/react/training/part-time-course/amsterdam',
                label: 'Amsterdam',
              },
            ]}
          />
          <Header
            titleLines={['React Redux part-time course - Amsterdam']}
            subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work!"
            links={header.landingTraining.links}
            type={PART_TIME}
            training={training}
            showInfoBox={true}
          />
          <TopSection xsBgDark top>
            <Grid>
              <Card bg="dark">
                <Row>
                  <Col md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingLoading={trainingLoading}
                      trainingError={trainingError}
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="E_4eQQHjc7A" />
                    <TrainingDetails
                      date={training && training.dates}
                      timing="9am - 6pm Friday's"
                      location={
                        <React.Fragment>
                          {training && training.city}
                        </React.Fragment>
                      }
                      coaches={[ROY_DERKS, ALEX_LOBERA]}
                    />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumPartTime layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>
          <TargetAudienceSection />
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AlternativeTrainings trainings={crossSellTrainings} />
                </Col>
              </Row>
            </Grid>
          </Section>

          <BlogSection tags={['react', 'beginner']} />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default PartTimeAmsterdam

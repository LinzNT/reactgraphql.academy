import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H4 } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumReactFoundation, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactFoundation'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  ALEX_LOBERA,
  RICHARD_MOSS,
  selectNthTraining,
  selectUpcomingTrainings,
  AlternativeTrainings,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { BARCELONA } from 'src/config/data'
import { WORKSHOP_TRAINING_ID } from '../'

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const workshops = selectUpcomingTrainings({
        trainings,
        trainingId: WORKSHOP_TRAINING_ID,
      })

      const training = selectNthTraining({
        trainings: workshops,
        nth,
      })

      const trainingTitle =
        training &&
        training.training &&
        training.training.description &&
        training.training.description.title
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        city: BARCELONA,
        types: [REACT_WORKSHOP, REACT_FUNDAMENTALS, REACT_BOOTCAMP],
        excludeTrainingId: WORKSHOP_TRAINING_ID,
      })
      return (
        <React.Fragment>
          <Helmet
            title="1-Day React Foundation Workshop Barcelona"
            link={[
              {
                rel: 'canonical',
                href: canonical,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: '1-Day React Foundation Workshop Barcelona',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: '/react/training/workshops/react-foundation',
                label: '1-Day React Foundation',
              },
              {
                to: path,
                label: 'Barcelona',
              },
            ]}
          />
          <Header
            titleLines={[`1-Day React Foundation Workshop Barcelona`]}
            subtitle="Get started with React in Barcelona by creating a solid foundation that will help you speed up your career as React developer "
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark">
            <Card variant="primary">
              <Row>
                <Col md={6} lg={5} lgOffset={1}>
                  <PaymentSection
                    training={training}
                    trainingError={trainingError}
                    trainingLoading={trainingLoading}
                  />
                </Col>
                <Col md={6} lg={4} lgOffset={1}>
                  <H4>Rafa's student experience</H4>
                  <Video youtubeId="hZZksRcqtkc" />
                  <TrainingDetails coaches={[ALEX_LOBERA, RICHARD_MOSS]} />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns..."
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="blg40SCle7I"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <Link
                  className="perfect-course-student"
                  to="/blog/are-you-the-perfect-react-graphql-student/"
                >
                  Blog: Are YOU the Perfect React Student?
                </Link>
              </Col>
            </Row>
          </Section>
          <Section top>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumReactFoundation layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </Section>

          <Section>
            <Row>
              <Col lg={10} lgOffset={1}>
                <AlternativeTrainings trainings={crossSellTrainings} />
              </Col>
            </Row>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

InstancePage.defaultProps = {
  pageContext: {},
}

export default InstancePage

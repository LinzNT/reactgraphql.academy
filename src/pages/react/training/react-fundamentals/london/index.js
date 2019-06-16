import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumReactFundamentals } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  ALEX_LOBERA,
  RICHARD_MOSS,
  selectNthTraining,
  selectUpcomingTrainings,
  getUpcomingTrainingsByType,
  AlternativeTrainings,
} from 'src/components/training'
import { Image } from 'src/components/elements'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  REACT_WORKSHOP,
  ONE_DAY_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  GRAPHQL_BOOTCAMP,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import BlogSection from 'src/components/blog/BlogSection'

const ReactFundamentalsLondon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const fundamentalsTrainings = selectUpcomingTrainings({
        trainings,
        type: REACT_FUNDAMENTALS,
        city: LONDON,
      })
      const training = selectNthTraining({ trainings: fundamentalsTrainings })
      const crossSellTrainings = getUpcomingTrainingsByType({
        trainings,
        types: [
          REACT_BOOTCAMP,
          REACT_WORKSHOP,
          ONE_DAY_WORKSHOP,
          GRAPHQL_API,
          GRAPHQL_CLIENT,
          GRAPHQL_BOOTCAMP,
        ],
      })
      return (
        <React.Fragment>
          <Helmet
            title="React Fundamentals in London"
            meta={[
              {
                name: 'description',
                content:
                  'React Fundamentals - learn a solid foundation in React in just 3 days in London',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/react-fundamentals',
                label: 'React Fundamentals',
              },
              {
                to: '/react/training/react-fundamentals/london',
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['React, Redux Fundamentals - London']}
            subtitle="In 3 days, we can teach you how to code in React to give you a solid foundation to take your dev career further."
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_FUNDAMENTALS}
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
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="yvROXLQ1jHg" />
                    <TrainingDetails coaches={[ALEX_LOBERA, RICHARD_MOSS]} />
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
                    <CurriculumReactFundamentals layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Row>
                <HideComponentsUsingCss xs sm>
                  <Col md={6} lg={5}>
                    <Image src={BOOTCAMP_COLLAB} width="100%" />
                  </Col>
                </HideComponentsUsingCss>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2Ref>
                    Is this React course right for you? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      A developer with 1+ year of development under your belt
                      using JavaScript?
                    </Li>
                    <Li>
                      Familiar with front-end technologies like JavaScript, CSS,
                      and HTML?
                    </Li>
                    <Li>
                      Taking a step forward to become a confident React
                      developer, able to quickly get orientated and add value to
                      a React application.
                    </Li>
                    <Li>
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>

                  <H3>Not for beginner devs!</H3>
                  <P>
                    <strong>We do not run learn-to-code bootcamps</strong>.
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
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

export default ReactFundamentalsLondon

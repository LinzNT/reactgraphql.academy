import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumReactFundamentals } from 'src/components/curriculum'
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

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const fundamentalsTrainings = selectUpcomingTrainings({
        trainings,
        type: REACT_FUNDAMENTALS,
        city: LONDON,
      })
      const training = selectNthTraining({
        trainings: fundamentalsTrainings,
        nth,
      })
      const crossSellTrainings = selectUpcomingTrainings({
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
            link={[
              {
                rel: 'canonical',
                href: canonical,
              },
            ]}
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
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['React Redux Fundamentals - London']}
            subtitle="In 3 days, we can teach you how to code in React to give you a solid foundation to take your dev career further."
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_FUNDAMENTALS}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark" top>
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
                  <H4>Charlie's student experience</H4>
                  <Video youtubeId="VhUMAqToJ4s" />
                  <TrainingDetails coaches={[ALEX_LOBERA, RICHARD_MOSS]} />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumReactFundamentals
                    training={training}
                    layout={LIST_TWO_COL}
                  />
                </Col>
              </Row>
            </Card>
          </Section>

          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="I enjoyed how the coaches interacted with us. They talked in a way that was super positive and really supportive."
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="Syktu6ICNfw"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this React course right for you? Are you...{' '}
                  <Link to="#target-audience" name="target-audience"></Link>
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
                    Taking a step forward to become a confident React developer,
                    able to quickly get orientated and add value to a React
                    application.
                  </Li>
                  <Li>
                    Not satisfied with the pace of online learning and it's lack
                    of 1-on-1 mentoring?
                  </Li>
                </Ul>

                <H3>Not for beginner devs!</H3>
                <P>
                  <strong>We do not run learn-to-code bootcamps</strong>.
                </P>
                <Link
                  className="perfect-course-student"
                  to="/blog/are-you-the-perfect-react-graphql-student/"
                >
                  Blog: Are YOU the Perfect React Student?
                </Link>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row>
              <Col lg={10} lgOffset={1}>
                <AlternativeTrainings
                  city={LONDON}
                  trainings={crossSellTrainings}
                />
              </Col>
            </Row>
          </Section>

          <BlogSection tags={['react', 'beginner']} />
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

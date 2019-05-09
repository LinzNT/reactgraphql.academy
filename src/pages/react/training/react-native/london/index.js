import React from 'react'

import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumReactNative } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import { Link, Breadcrumb } from 'src/components/navigation'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from 'src/config/images'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  selectUpcomingTrainings,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from 'src/components/training'
import {
  BulletIcon,
  NotBegginersIcon,
  ReactIcon,
  CollabsIcon,
} from 'src/components/icons'
import { Image } from 'src/components/elements'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { REACT_NATIVE, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const ReactNativeBoocampLondon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingNativeTrainings = selectUpcomingTrainings({
        trainings,
        type: REACT_NATIVE,
        city: LONDON,
      })
      const training =
        selectNthTraining({ trainings: upcomingNativeTrainings }) || {}
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/react-native', label: 'React Native' },
              {
                to: '/react/training/react-native/london',
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[`React Native Training - London`]}
            subtitle="Take your React developer career to the next level by<br />learning React Native, in only one day. "
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_NATIVE}
            training={training}
            showInfoBox={true}
          />
          <TopSection xsBgDark top>
            <Grid>
              <Card bg="dark">
                <Row>
                  <Col xs={12} md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                    />
                  </Col>
                  <Col xs={12} md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="yvROXLQ1jHg" />
                    <TrainingDetails
                      foodIncluded
                      coaches={[HORACIO_HERRERA, ALEX_LOBERA]}
                    />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
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
                    Is this React Native training right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul unstyled>
                    <Li>
                      <BulletIcon icon={NotBegginersIcon} />
                      You have at least a few months of experience using React
                      on the web. If you don't know React, we recommend you
                      first to attend our{' '}
                      <Link to="/react-redux-graphql-bootcamp">
                        React Bootcamp
                      </Link>
                    </Li>
                    <Li>
                      <BulletIcon icon={ReactIcon} />
                      Taking a step forward to become a React Native Specialist
                      able to make critical decisions about the architecture of
                      a React Native application.
                    </Li>
                    <Li>
                      <BulletIcon icon={CollabsIcon} />
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, our training could be for
                    you!
                  </P>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    This is not a training for React beginners. If you don't
                    know React, we recommend you first to attend our{' '}
                    <Link to="/react-redux-graphql-bootcamp">
                      React Bootcamp
                    </Link>
                    .
                  </P>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AttendeeQuote
                    quote="Technology nowadays changes very often and in future you may not be able to find a job with the things you know - you have to keep up. I like the fact that we got to write code rather than focus on theory."
                    fullname="Catalin Cislariu"
                    job="Senior Developer"
                    company="KLEIDO LTD"
                    profilePicUrl={CATALIN}
                  />
                </Col>
              </Row>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumReactNative layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default ReactNativeBoocampLondon

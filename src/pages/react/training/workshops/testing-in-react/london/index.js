import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumTestingInReact } from 'src/components/curriculum/workshops'
import { Card, Video } from 'src/components/elements'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from 'src/config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  ALEX_LOBERA,
  RICHARD_MOSS,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Image } from 'src/components/elements'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { ONE_DAY_WORKSHOP, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const AdvancedReactWorkshopLondon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const training = getNextTrainingByTrainingId({
        trainings,
        trainingId: '5d01096406051b7d3bcb0cf5',
      })
      const trainingTitle =
        training &&
        training.training &&
        training.training.description &&
        training.training.description.title
      return (
        <React.Fragment>
          <Helmet
            title="Testing in React"
            meta={[
              {
                name: 'description',
                content: '1-day Testing in React Workshop in London',
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
                to: '/react/training/workshops/testing-in-react',
                label: 'Testing in React',
              },
              {
                to: '/react/training/workshops/testing-in-react/london',
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[`${trainingTitle || '...loading'} - London`]}
            subtitle="Learn the advanced skills needed to use React Hooks and test your apps effectively"
            links={header.landingTraining.links}
            bgImageName={LONDON_BOOTCAMP}
            type={ONE_DAY_WORKSHOP}
            training={training}
            showInfoBox={true}
          />
          <TopSection xsBgDark>
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
              <Row>
                <HideComponentsUsingCss xs sm>
                  <Col md={6} lg={5}>
                    <Image src={BOOTCAMP_COLLAB} width="100%" />
                  </Col>
                </HideComponentsUsingCss>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2Ref>
                    Is this one day workshop right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      A developer with previous experience building React apps?
                    </Li>
                    <Li>
                      A developer who wants to upskill or specialise in advanced
                      React skills?
                    </Li>
                    <Li>
                      A developer who has heard of React Hooks but doesn't know
                      what that entails?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, this workshop could be for
                    you!
                  </P>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    This is not a learn-to-code course. If you want to learn to
                    code, we recommend checking out{' '}
                    <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                      Free Code camps
                    </Link>
                    .
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section top>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumTestingInReact layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
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

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default AdvancedReactWorkshopLondon

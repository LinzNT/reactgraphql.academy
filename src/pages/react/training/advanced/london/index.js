import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import { Card, Video } from 'src/components/elements'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import { CurriculumAdvancedReact } from 'src/components/curriculum'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  getUpcomingTrainingsByType,
  AlternativeTrainings,
  TrainingDetails,
  ALEX_LOBERA,
  HORACIO_HERRERA,
  RICHARD_MOSS,
  WILL_VOELCKER,
} from 'src/components/training'
import { Image } from 'src/components/elements'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  ADVANCED_REACT,
  ONE_DAY_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  GRAPHQL_BOOTCAMP,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'Advanced React Training in London | React GraphQL Academy',
  description:
    'Looking for a Advanced React training in London? Learn Advanced React patterns and concepts with our experts in London. Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const BootcampLondon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingAdvancedTrainings = selectUpcomingTrainings({
        trainings,
        type: ADVANCED_REACT,
        city: LONDON,
      })
      const training =
        selectNthTraining({ trainings: upcomingAdvancedTrainings }) || {}
      const crossSellTrainings = getUpcomingTrainingsByType({
        trainings,
        types: [
          ONE_DAY_WORKSHOP,
          GRAPHQL_API,
          GRAPHQL_CLIENT,
          GRAPHQL_BOOTCAMP,
        ],
      })
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/advanced',
                label: 'Advanced',
              },
              {
                to: '/react/training/advanced/london',
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['Advanced React Training - London']}
            subtitle="Take your React career to the next level by mastering advanced React - in just 3 days!"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={ADVANCED_REACT}
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
                      financeAvailable
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="yvROXLQ1jHg" />
                    <TrainingDetails
                      foodIncluded={false}
                      coaches={[
                        ALEX_LOBERA,
                        HORACIO_HERRERA,
                        RICHARD_MOSS,
                        WILL_VOELCKER,
                      ]}
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
                    <CurriculumAdvancedReact layout={LIST_TWO_COL} />
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
                    <Image
                      src={BOOTCAMP_COLLAB}
                      width="100%"
                      alt="React GraphQL Academy coach Tiago assisting two students, inspecting their laptop screens and ready to answer their questions"
                    />
                  </Col>
                </HideComponentsUsingCss>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2Ref>
                    Is this Advanced React training right for me?{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <CurriculumAdvancedReact.TargetAudienceList />
                  </Ul>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    This is a bootcamp for React developers that are experienced
                    with React. If you don't have 1+ year of experience using
                    React we recommend you to attend our{' '}
                    <Link to="/react/training/bootcamp">React Bootcamp</Link>.
                  </P>
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
          <BlogSection tags={['react', 'advanced']} />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default BootcampLondon

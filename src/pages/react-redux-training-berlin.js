import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection } from '../components/training'

const BootcampBerlin = () => (
  <React.Fragment>
    <Header
      titleLines={['React Redux GraphQL Bootcamp', 'Training in Berlin']}
      subtitle="Take your dev career to the next level in Berlin - Germany - by mastering<br />React, Redux, and GraphQL - in just 7 days!"
      bgImg="training-event"
    />
    <TopSection>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col xs={12} lg={10} lgOffset={1}>
              <H2>Trusted by industry leaders</H2>
              <TrustedByLogoList />
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section xsBgDark>
      <Grid>
        <Card bg="dark">
          <Row>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeID="yvROXLQ1jHg" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <H2>React Redux GraphQL in Berlin, Germany.</H2>
              <P>
                Join us for our first addition of the React, Redux, GraphQL
                bootcamp in Berlin, Germany. Our bootcamp format is made up of 6
                intensive training days where you'll learn through practical
                hand-on projects how to build production ready Reacy
                applications.
              </P>
              <P>
                Check out the 3 minute video on the left to get a feel for our
                bootcamps and here what some of our preivous students think
                about the experience :-)
              </P>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Card white border="shadow">
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </Section>

    <UpcomingTrainingSection />
  </React.Fragment>
)

export default BootcampBerlin

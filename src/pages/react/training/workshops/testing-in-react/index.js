import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumTestingInReact from 'src/components/curriculum/workshops/CurriculumTestingInReact'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Link, Breadcrumb } from 'src/components/navigation'
import { REACT_WORKSHOP } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const AdvancedReactWorkshop = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const training = getNextTrainingByTrainingId({
        trainings,
        trainingId: '5d01096406051b7d3bcb0cf5',
      })
      return (
        <React.Fragment>
          <Helmet
            title="Testing in React"
            meta={[
              {
                name: 'description',
                content: '1-day Testing in React Workshop',
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
                to: path,
                label: 'Testing in React',
              },
            ]}
          />
          <Header
            titleLines={['Testing in React']}
            subtitle="Learn how to build fully tested scalable React applications"
            links={[
              { text: 'Workshop Agenda', to: '#curriculum' },
              { text: 'Is this right for me?', to: '#target-audience' },
            ]}
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
            training={training}
          />
          <TopSection top>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumTestingInReact layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="As a freelance developer, I was tired of doing online courses. [The course] was fantastic - the teachers didn't leave a single question unanswered."
                  fullname="Rafa Fraga"
                  job="Software Engineer"
                  youtubeId="hZZksRcqtkc"
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
                  If you've said 'yes' to these, this workshop could be for you!
                </P>
                <H3>Not for React beginners!</H3>
                <P>
                  This is not a learn-to-code workshop. If you want to learn to
                  code, we recommend checking out{' '}
                  <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                    Free Code Camp
                  </Link>
                  .
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

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default AdvancedReactWorkshop

import React, { useState } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { WHITE, DARK_GREY, DARK_BLUE } from '../config/styles'
import { WHY_REACTJS_ACADEMY } from '../config/images.js'
import { CONVINCE_THE_BOSS_PDF } from '../config/data'
import { HOME_PAGE } from '../../images/imageNames'
import Layout from '../components/layout'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import { defaultButtonStyle } from '../components/buttons/Button'
import { TopSection, ColSection } from '../components/layout/Section'
import { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import AttendeeQuote from 'src/components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import FullCurriculumsReact from '../components/curriculum/FullCurriculumsReact'
import FullCurriculumsGraphQL from '../components/curriculum/FullCurriculumsGraphQL'
import { createSocialMetas } from '../components/utils'
import { RootHeader as Header } from '../components/layout/Header'
import Card from '../components/elements/Card'
import Video from '../components/elements/Video'
import TrustedBySection from '../components/training/TrustedBySection'
import UpcomingTrainingSection from '../components/training/UpcomingTrainingSection'
import Box from 'src/components/layout/Box'

const metas = {
  title: 'React & GraphQL Expert Training | React GraphQL Academy',
  description:
    'Looking for React and GraphQL expert training? React GraphQL Academy offers in-person real-world training by our experts. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const StyledTabItem = styled(Link).attrs({ className: 'select-technology' })`
  ${defaultButtonStyle}
  &:first-child {
    box-shadow: -5px -5px 15px -5px rgba(0, 0, 0, 0.26);
  }
  &:last-child {
    box-shadow: 5px -5px 15px -5px rgba(0, 0, 0, 0.26);
  }
  position: relative;
  z-index: 1;
  border-bottom: none;
  text-decoration: none;
`
const StyledTabTitle = styled(Box)`
  color: ${WHITE};
`
StyledTabTitle.defaultProps = {
  pb: 1,
}

const TabItem = ({ variant, ...rest }) => (
  <StyledTabItem
    {...(variant ? tabItemVariantProps[variant] : {})}
    {...rest}
    display="inline-block"
  />
)

TabItem.defaultProps = {
  border: '1px solid',
  variant: 'default',
  p: 3,
  borderColor: DARK_BLUE,
}

export const tabItemVariantProps = {
  default: {
    color: WHITE,
    backgroundColor: DARK_BLUE,
  },
  active: {
    color: DARK_GREY,
    bg: WHITE,
    textShadow: 'bold',
  },
}

const TAB_REACT = 'react'
const TAB_GRAPHQL = 'graphql'

const IndexPage = () => {
  const [selectedTab, setTab] = useState(TAB_REACT)

  return (
    <Layout>
      {({ trainings }) => (
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
          <Header
            titleLines={[
              'Take your dev career further',
              'with React GraphQL Academy',
            ]}
            subtitle="In-person courses, workshops and meetups from experts who were the first in
        Europe to teach React. "
            bgImageName={HOME_PAGE}
          />
          <TopSection mt={[0, -250]}>
            <Row>
              <Col lgOffset={1} lg={11}>
                <StyledTabTitle>Select Technology: </StyledTabTitle>
                <TabItem
                  onClick={() => setTab(TAB_REACT)}
                  to="#tab-curriculum"
                  variant={selectedTab === TAB_REACT ? 'active' : undefined}
                >
                  React
                </TabItem>
                <TabItem
                  variant={selectedTab === TAB_GRAPHQL ? 'active' : undefined}
                  onClick={() => setTab(TAB_GRAPHQL)}
                  to="#tab-curriculum"
                >
                  GraphQL
                </TabItem>
                <a name="tab-curriculum" />
              </Col>
            </Row>
            <Card pt={[4, 7]}>
              {selectedTab === TAB_REACT ? (
                <FullCurriculumsReact trainings={trainings} />
              ) : (
                <FullCurriculumsGraphQL trainings={trainings} />
              )}
            </Card>
          </TopSection>
          <ColSection
            col={
              <AttendeeQuote
                quote="As a freelance developer, I was tired of doing online courses. [The course] was fantastic - the teachers didn't leave a single question unanswered."
                fullname="Rafa Fraga"
                job="Software Engineer"
                youtubeId="hZZksRcqtkc"
              />
            }
            col2={
              <React.Fragment>
                <H2>Is React GraphQL Academy right for me?</H2>
                <Ul>
                  <Li>
                    For working developers - <strong>not for beginners!</strong>
                  </Li>
                  <Li>
                    <strong>Hands-on project-based</strong> training.
                  </Li>
                  <Li>
                    <strong>collaborative</strong> learning environment.
                  </Li>
                  <Li>
                    <Link
                      to="/react/training/bootcamp"
                      className="is-it-for-me"
                    >
                      Bootcamps
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                  <Li>
                    <Link
                      to="/react/training/part-time-course/"
                      className="is-it-for-me"
                    >
                      Part-time courses
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                </Ul>
                <LinkButton
                  to="/blog/are-you-the-perfect-react-graphql-student/"
                  className="is-it-for-me-cta"
                >
                  Blog: Are YOU the Perfect Bootcamp Student?
                </LinkButton>
              </React.Fragment>
            }
          />
          <TrustedBySection />
          <ColSection
            variant="thinLeft"
            col={
              <Video
                youtubeId="o6YwbHGfPOo"
                description={
                  <P>
                    <em>
                      Andru Dunn, Senior Developer at{' '}
                      <strong>John Lewis</strong> speaks how React GraphQL
                      Academy training has improved his team.
                    </em>
                  </P>
                }
              />
            }
            col2={
              <React.Fragment>
                <H2>React GraphQL Academy - great for your whole team</H2>
                <Ul>
                  <Li>Avoid delays and business losses</Li>
                  <Li>Minimize risk of onboarding React & GraphQL</Li>
                  <Li>Safe environment for developers to learn</Li>
                  <Li>Increase employee retention and productivity</Li>
                  <Li>Offer more services to internal and external clients</Li>
                </Ul>
                <Row>
                  <Col sm={7}>
                    <LinkButton
                      pdf
                      to={CONVINCE_THE_BOSS_PDF}
                      className="learn-with-us-pdf"
                    >
                      Why devs should learn with us
                    </LinkButton>
                  </Col>
                  <Col sm={5}>
                    <LinkButton
                      mt={[4, 0]}
                      display={'block'}
                      variant="secondary"
                      to="/react/training/corporate/"
                      className="corporate-team-training-testimonials-cta"
                    >
                      Corporate team training
                    </LinkButton>
                  </Col>
                </Row>
              </React.Fragment>
            }
          ></ColSection>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export default IndexPage

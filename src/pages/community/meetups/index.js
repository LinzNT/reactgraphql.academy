import React from 'react'
import styled from 'styled-components'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { Li } from 'src/components/layout/Ul'
import { H2, H3, P } from 'src/components/text'
import { Link } from 'src/components/navigation'
import { Card, Image, Newsletter } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { LinkButton } from 'src/components/buttons'
import { MEETUP, selectMeetups, instagramPictures } from 'src/config/data'
import { MENTORSHIP_IMG } from 'src/config/images'

const CallToAction = styled(LinkButton)`
  position: absolute;
  top: -25px;
`
const SecondaryCard = styled(Card)`
  margin-top: 36px;
`

const EventList = styled.ul`
  list-style: none;
  margin-left: 0;
  h3 {
    padding-top: 0;
  }
  li {
    margin-top: 18px;
  }
  > li:first-child {
    margin-top: 0;
  }
`

const MeetupLink = styled(Link)`
  font-size: 0.9rem;
`

const TwitterWidgetsOnlyOnClientSide = () => {
  if (typeof window !== 'undefined') {
    // package react-twitter-embed does not work on SSR, therefore it breaks the Gatsby build
    const {
      TwitterTimelineEmbed,
      TwitterFollowButton,
    } = require('react-twitter-embed')

    return (
      <React.Fragment>
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactgqlacademy"
          options={{ height: 800 }}
        />
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
      </React.Fragment>
    )
  } else {
    return null
  }
}

const Community = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingBootcamps = selectUpcomingTrainings({
        trainings,
        type: MEETUP,
      })
      const nextMeetup =
        selectNthTraining({ trainings: upcomingBootcamps }) || {}
      const nextMeetupStartDate =
        nextMeetup &&
        formatUTC(nextMeetup.startDate, nextMeetup.utcOffset, 'D MMM')
      const meetups = selectMeetups()

      return (
        <React.Fragment>
          <Header
            titleLines={['The React GraphQL', 'Academy community']}
            subtitle="We are not a group of people - but a movement!"
            links={[
              { text: 'Twitter ', to: '#twitter' },
              { text: 'Meetups', to: '#meetups' },
              { text: 'Instagram', to: '#instagram' },
              { text: 'Mentor community', to: '#mentor-community' },
            ]}
            bgImageName={LONDON_BOOTCAMP}
            training={nextMeetup}
          />
          <TopSection>
            <Grid>
              <Card border="shadow">
                <Col lg={11} lgOffset={1}>
                  <CallToAction
                    variant="primary"
                    to={nextMeetup && nextMeetup.toPath}
                    children={`Next Meetup: ${nextMeetupStartDate}, ${nextMeetup &&
                      nextMeetup.city} `}
                  />
                  <H2>Our upcoming meetups</H2>
                  <UpcomingTrainingSection
                    curriculum
                    removeAdditionalCTAs
                    trainings={upcomingBootcamps}
                  />
                  <H3>Our groups</H3>
                  <Row>
                    <Col xs={6}>
                      <MeetupLink to="http://meetup.com/JavaScript-London">
                        JavaScript London
                      </MeetupLink>
                    </Col>
                    <Col xs={6}>
                      <MeetupLink to="http://meetup.com/JavaScript-Lisbon">
                        JavaScript Lisbon
                      </MeetupLink>
                    </Col>
                    <Col xs={6}>
                      <MeetupLink to="http://meetup.com/JavaScript-Barcelona">
                        JavaScript Barcelona
                      </MeetupLink>
                    </Col>
                    <Col xs={6}>
                      <MeetupLink to="http://meetup.com/JavaScript-Amsterdam">
                        JavaScript Amsterdam
                      </MeetupLink>
                    </Col>
                    <Col xs={6}>
                      <MeetupLink to="http://meetup.com/JavaScript-Paris">
                        JavaScript Paris
                      </MeetupLink>
                    </Col>
                    <Col xs={6}>
                      <MeetupLink to="http://meetup.com/JavaScript-Berlin">
                        JavaScript Berlin
                      </MeetupLink>
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col xs={12} md={6}>
                  <Image
                    src={MENTORSHIP_IMG}
                    alt="A group of React GraphQL Academy coaches and mentors, looking very happy indeed"
                  />
                </Col>
                <Col xs={12} md={5} mdOffset={1}>
                  <H2>
                    Our mentor community <a name="mentor-community" />
                  </H2>
                  <P>
                    React GraphQL Academy is devoted to helping developers grow
                    in their professional career. Our dedication stands beyond
                    making them awesome React developers. We want them to make
                    an impact in the organizations and people they choose to
                    work with.
                  </P>
                  <P>
                    Our experience tells us that the best way to master a skill
                    is by teaching it. We believe sharing knowledge also
                    contributes to creating collaborative workplaces &
                    communities.
                  </P>
                  <P>
                    The React GraphQL Academy mentorship program enables those
                    experienced developers in our community to take a step
                    farther and become a mentor in our community events and
                    workshops. This way they can build the experience required
                    to become not only a great developer but also a great coach,
                    speaker, and team player.
                  </P>
                  <P>
                    <Link to="#contact-us">Contact us</Link>
                  </P>
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

export default Community

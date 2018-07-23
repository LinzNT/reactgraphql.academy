import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import ContactForm from '../components/form/Contact'
import AttendeeQuote from '../components/training/AttendeeQuote'
import { Video, Card } from '../components/elements'
import { Trainline, ASOS, ABInBev, Blockchain } from '../components/logos'
import { CurriculumPartTime } from '../components/curriculum'
import Header from '../components/layout/Header'
import CallToActionRow from '../components/layout/CallToActionRow'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import TrustedBySection from '../components/training/TrustedBySection'
import TrainingItem from '../components/training/TrainingItem'
import TrainingList from '../components/training/TrainingList'
import {
  BussinessIcon,
  CalendarIcon,
  CodeIcon,
  CollabsIcon,
  EnterMindIcon,
  HeartIcon,
  NotBegginerIcon,
  NotBegginersIcon,
  ProductionReadyIcon,
  RunFastIcon,
  SpannerIcon,
  StarIcon,
  TargetIcon,
  TickBadgeIcon,
  TimeIcon,
  TrainerIcon,
  ReactIcon,
  WorldIcon,
  BulletIcon,
} from '../components/icons'

const PartTime = () => (
  <div>
    <Header
      titleLines={['6-week part-time React', 'Redux GraphQL course']}
      subtitle="Expert coaches work alongside you, 2 evenings a week, <br /> to master the React ecosystem without having to cut <br /> into valuable work-days"
    />
    <TopSection>
      <Grid>
        <CallToActionRow left>
          <Col lg={11} lgOffset={1}>
            <LinkButton
              cta
              large
              to="/react-redux-training-london"
              children="Next course: 2nd October, London >>"
            />
          </Col>
        </CallToActionRow>
        <Card border="shadow">
          <CurriculumPartTime />
        </Card>
      </Grid>
    </TopSection>

    <Section>
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7} lg={5} lgOffset={1}>
            <Row>
              <Col>
                <H2>Is this React part-time course right for me?</H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul unstyled>
                  <Li>
                    <BulletIcon icon={CollabsIcon} />
                    Meaningful, collaborative learning
                  </Li>
                  <Li>
                    <BulletIcon />
                    Personal mentoring over online learning
                  </Li>
                  <Li>
                    <BulletIcon />
                    Don't miss a single day of work - only 2 evenings a week
                  </Li>
                  <Li>
                    <BulletIcon />
                    Not for beginners! Looking for a{' '}
                    <Link to="https://makers.tech/">
                      Learn-to-Code course?
                    </Link>{' '}
                  </Li>
                  <Li>
                    <BulletIcon />
                    Discuss real-world projects to learn best practices
                  </Li>
                  <Li>
                    <BulletIcon />
                    Coaches are expert React developers
                  </Li>
                </Ul>
              </Col>
            </Row>
            <P>
              <Link to="/react-redux-graphql-bootcamp-london">
                Next part-time course: London - 2nd October 2018
              </Link>
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
              quote="The ReactJS Academy part time course really worked for me. I needed to learn React but flexibility around my schedule was super important - not only that, it was great fun!"
              fullname="Richard Moss"
              job="CTO"
              company="Financial Times"
              profilePicUrl="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg"
            />
          </Col>
        </Row>
      </Grid>
    </Section>

    <TrustedBySection />

    <Section>
      <Grid>
        <H2Ref>
          <Col lg={10} lgOffset={1}>
            Upcoming React part-time courses{' '}
            <a name="next-part-time-courses" href="#next-part-time-courses">
              #
            </a>
          </Col>
        </H2Ref>
        <Row>
          <Col lg={10} lgOffset={1}>
            <TrainingList>
              <TrainingItem
                location="London, UK"
                startDate="Oct 2nd to Nov 8th, 2018"
                name="London part-time"
                path="/react-redux-training-london"
                imageSrc="https://reactjs.academy/react-redux-training-london"
              />
              <TrainingItem
                location="London, UK"
                startDate="Oct 2nd to Nov 8th, 2018"
                name="London part-time"
                path="/react-redux-training-london"
                imageSrc="https://reactjs.academy/react-redux-training-london"
              />
            </TrainingList>
          </Col>
        </Row>
      </Grid>
    </Section>
  </div>
)

export default PartTime

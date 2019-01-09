import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumPartTime } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrustedByLogoList,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from '../components/training'
import { HideComponentsUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { PART_TIME as PART_TIME_IMG, CATALIN } from '../config/images'
import { Image, Newsletter } from '../components/elements'
import header from '../components/layout/Header.json'
import { InstallmentsCard, PaymentSection } from '../components/payment'
import { Link, Breadcrumb } from '../components/navigation'
import { selectFirstTraining, PART_TIME, BARCELONA } from '../config/data'

const training = selectFirstTraining(PART_TIME, BARCELONA)

const PartTimeBarcelona = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-part-time-course', label: 'Part-time' },
        { to: '/react-redux-training-barcelona', label: 'Barcelona' },
      ]}
    />
    <Header
      titleLines={[
        'React Redux part-time course',
        `${training.dates} - Barcelona`,
      ]}
      subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work!"
      links={header.landingTraining.links}
      bgImg="part-time"
    />
    <TopSection xsBgDark>
      <Grid>
        <Card bg="dark">
          <Row>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <PaymentSection
                data={{
                  trainingInstanceId: training.trainingInstanceId,
                  price: training.price,
                  discountPrice: training.discountPrice,
                  priceGoesUpOn: training.priceGoesUpOn,
                  currency: training.currency,
                }}
              />
              <InstallmentsCard price={1500} />
            </Col>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeID="E_4eQQHjc7A" />
              <TrainingDetails
                date={training.dates}
                timing="9am - 6pm Saturday's"
                location={
                  <React.Fragment>
                    {training.location}
                    {/* <Link to="https://www.google.com/maps/place/Makers/@51.5173403,-0.0754695,17z/data=!3m1!4b1!4m5!3m4!1s0x48761caf26599a83:0x9b451d586c649129!8m2!3d51.5173403!4d-0.0732808">
                      See on map
                    </Link> */}
                  </React.Fragment>
                }
                coaches={[HORACIO_HERRERA, ALEX_LOBERA]}
              />
              <Row>
                <Newsletter />{' '}
              </Row>
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
              <Image
                src={PART_TIME_IMG}
                width="100%"
                alt="ReactJS Academy coach Alex assists a student, being next to them, inspecting their code and helping them on their learning path."
              />
            </Col>
          </HideComponentsUsingCss>
          <Col md={6} lg={5} lgOffset={1}>
            <H2Ref>
              Is this React part-time course right for me? Are you...{' '}
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginerIcon} />A developer with ~1 year of
                development under your belt?
              </Li>
              <Li>
                <BulletIcon icon={CodeIcon} />
                Familiar with front-end technologies like JavaScript, CSS, and
                HTML?
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                Taking a step forward to become a React JS specialist, able to
                make critical decisions in the architecture of a React
                application.
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Not satisfied with online learning and it's lack of 1-on-1
                mentoring?
              </Li>
            </Ul>
            <P>
              If you've said 'yes' to these, our part-time course could be for
              you!
            </P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a learn-to-code course. If you want to learn to code,
              we recommend you contact our London-based partner{' '}
              <Link to="https://makers.tech/">Makers</Link>. PLUS you'll get a
              &pound;250 discount using our reference "ReactJS Academy".
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
              <CurriculumPartTime listTwoCol />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default PartTimeBarcelona

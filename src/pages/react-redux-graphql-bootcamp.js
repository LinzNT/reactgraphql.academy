import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H2, H2Ref, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import { CurriculumBootcamp } from '../components/curriculum'
import Header from '../components/layout/Header'
import TrustedBy from '../components/training/TrustedBySection'
import { Card } from '../components/elements'
import CallToActionRow from '../components/layout/CallToActionRow'
import { TrainingItem, TrainingList } from '../components/training'
import london from '../assets/img/london.png'

const Boocamps = () => (
  <div>
    <Header
      titleLines={['1-week full-time React, Redux,', 'GraphQL Bootcamp']}
      subtitle="In 7 days, expert coaches and mentors will work<br />alongside you to master the React ecosystem so you<br />  return to work as a React specialist"
    />
    <TopSection>
      <Grid>
        <CallToActionRow left>
          <Col xs={12} sm={5} smOffset={1}>
            <LinkButton
              cta
              large
              to="/react-redux-graphql-bootcamp-london"
              children="Next bootcamp: 20th August, London >>"
            />
          </Col>
        </CallToActionRow>
        <Card border="shadow">
          <CurriculumBootcamp />
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
          <Col md={7}>
            <Row>
              <Col lg={11} lgOffset={1}>
                <H2>Is this bootcamp right for me?</H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12} lg={11} lgOffset={1}>
                <Ul>
                  <Li>Extremely rapid, intense learning</Li>
                  <Li>
                    Ideal for experienced programmers familiar with good
                    practices. Not for beginners!
                  </Li>
                  <Li>
                    Small classes with mentoring from experts developers &
                    coaches
                  </Li>
                  <Li>
                    Hands-on project-based training - most of the time you are
                    coding.
                  </Li>
                  <Li>
                    Join a network of alumni for advice, knowledge and social
                    fun!
                  </Li>
                </Ul>
                <P>
                  <LinkButton
                    cta
                    large
                    to="/react-redux-graphql-bootcamp-london"
                  >
                    Next bootcamp: August 20th, London
                  </LinkButton>
                </P>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
    <TrustedBy />

    <Section>
      <Grid>
        <H2>
          <Col lg={10} lgOffset={1}>
            Upcoming Bootcamps
          </Col>
        </H2>
        <Row>
          <Col lg={10} lgOffset={1}>
            <TrainingList>
              <TrainingItem
                location="Makers Academy, London"
                startDate="August 20th to 25th, 2018"
                name="London bootcamp"
                path="/react-redux-graphql-bootcamp-london"
                imageSrc={london}
              />
            </TrainingList>
          </Col>
        </Row>
      </Grid>
    </Section>
  </div>
)

export default Boocamps

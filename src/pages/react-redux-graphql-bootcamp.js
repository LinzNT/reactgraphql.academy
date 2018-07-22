import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H2, H2Ref } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import { CurriculumBootcamp } from '../components/curriculum'
import { BOX_SHADOW, WHITE } from '../styles'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../components/utils'
import Header from '../components/layout/Header'
import TrustedBy from '../components/training/TrustedBy'

const CurriculumBox = styled.div`
  ${BOX_SHADOW};
  padding: 80px 0 50px;
  background-color: ${WHITE};
`
const CallToActionRow = styled(Row)`
  text-align: ${props => (props.left ? 'left' : 'center')};
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-bottom: -25px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 5px 0;
    }
  }
`

const CurriculumSection = styled(Section)`
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-top: -125px;
  }
`

const ForYourCompantCallToActionsRow = styled(Row)`
  margin-top: 30px;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 5px 0;
    }
  }
`

const Boocamps = () => (
  <div>
    <Header
      titleLines={['1-week full-time React, Redux,', 'GraphQL Bootcamp']}
      subtitle="In 7 days, expert coaches and mentors will work<br />alongside you to master the React ecosystem so you<br />  return to work as a React specialist"
    />
    <CurriculumSection>
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
        <CurriculumBox>
          <CurriculumBootcamp />
        </CurriculumBox>
      </Grid>
    </CurriculumSection>
    <Section color="lightGrey">
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
    <Section color="lightGrey">
      <Grid>
        <H2Ref>
          Upcoming bootcamps{' '}
          <a name="next-bootcamps" href="#next-bootcamps">
            #
          </a>
        </H2Ref>
        <Row>
          <Col md={6}>
            <Row>
              <Col xs={5}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={7}>
                London, UK
                <P>20-27, August 2018</P>
                <LinkButton
                  to="/react-redux-graphql-bootcamp-london"
                  children="London Bootcamp"
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={5}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={7}>
                Lisbon district, Portugal
                <P>7-13, October 2018</P>
                <LinkButton
                  to="/react-redux-graphql-bootcamp-lisbon"
                  children="Lisbon Bootcamp"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
  </div>
)

export default Boocamps

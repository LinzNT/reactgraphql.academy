import React from "react"
import styled from "styled-components"

import Link from "../components/navigation/Link"
import Header from "../components/layout/Header"
import Section from "../components/layout/Section"
import Ul, { Li } from "../components/layout/Ul.js"
import ValueBullet from "../components/bullets/ValueBullet"
import SmallIconAndSentences from "../components/bulletedsections/SmallIconAndSentences"
import {
  SPACING_MEDIUM,
  SPACING_STANDARD,
  LINE_HEIGHT_LARGE,
} from "../config/styles"
import LinkButton from "../components/buttons/LinkButton"
import Grid, { Col, Row } from "../components/layout/Grid"
import { H2, H4, H3a, P, SupportingText } from "../components/text"
import Arrow from "../resources/Arrow"
import Box from "../components/layout/Box"
import Trainline from "../components/logos/Trainline"
import NetAPorter from "../components/logos/NetAPorter"
import Nationwide from "../components/logos/Nationwide"
import JohnLewis from "../components/logos/JohnLewis"
import Capgemini from "../components/logos/Capgemini"

const SprintCard = styled.div`
  border: 1px solid #ddd;
  padding: ${SPACING_MEDIUM};
  justify-content: center;
  flex-wrap: wrap;

  h3 {
    margin-top: ${SPACING_STANDARD};
  }
`

const HeaderSupportingText = styled.div`
  font-size: 22px;
  line-height: ${LINE_HEIGHT_LARGE};
  color: white;
  margin-bottom: 20px;
`

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={["LeanJS"]}
      subtitle="Optimize software for change, reduce waste & move faster!"
      supportingText={
        <Col md={7}>
          <HeaderSupportingText>
            Our series of sprints can help you cut business costs & speed up the
            development process by introducing modern Web technology
            incrementally
          </HeaderSupportingText>

          <LinkButton className="header-button" to="#sprints">
            How it works
          </LinkButton>
        </Col>
      }
    />
    <Link to="#sprints" name="sprints" />
    <Section>
      <Grid>
        <Row>
          <Col>
            <H2 style={{ marginBottom: "10px" }}>
              Maximum efficiency, minimum risk
            </H2>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <SupportingText>
              The LeanJS <strong>Full Stack Sprint</strong> series helps you
              improve project tech & processes in the Leanest way possible.
            </SupportingText>
            <SupportingText>
              We base our Sprints around a real problem you're experiencing.
              From increasing product development speed to tech stack
              optimization, we offer our experts to help you solve it.
            </SupportingText>
            <SupportingText>
              Optimize your JavaScript stack to:
              <Ul>
                <Li>Build more features in less time with a smaller team</Li>
                <Li>Increase performance and deliver great user experiences</Li>
                <Li>Get new products to market faster and with quality</Li>
              </Ul>
            </SupportingText>
            <H2 style={{ marginTop: "30px" }}> How it works</H2>
            <SupportingText>
              Start incrementally. Stop at any step. Optimize tech and processes
              and increase competitive advantage in 3 low-risk steps:
            </SupportingText>
          </Col>
          <Col md={1} />
          <Col md={4}>
            <img src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/full_stack_sprint_illustrations%2FFullStackSprint.jpg?alt=media" />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <SprintCard>
              <H3a>Step 1. Value Proposition</H3a>
              <H4>1/2 Day</H4>
              <Ul>
                <Li>Stakeholders research: Tech Lead/s and/or CTO</Li>
                <Li>Problem statement and priorities</Li>
                <Li>Overview of the software architecture and code</Li>
                <Li>Value proposition and recommendations</Li>
              </Ul>
              <LinkButton
                className="sprint-contact-1"
                to="#contact"
                hasArrows
                dark
              >
                Contact us
              </LinkButton>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <H3a>Step 2. Proof Of Concept</H3a>
              <H4>1-Week Sprint</H4>
              <Ul>
                <Li>Sprint goal</Li>
                <Li>Architecture and code review</Li>
                <Li>Hands-on workshops and team training on the new tech</Li>
                <Li>Prototyping and coding with your team</Li>
                <Li>Findings, Conclusions, and Recommendations</Li>
              </Ul>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <H3a>Step 3. Production-ready Code</H3a>
              <H4>2-Week Sprint</H4>
              <Ul>
                <Li>Sprint goal</Li>
                <Li>Incremental prototype adoption into your codebase</Li>
                <Li>
                  Code improvement and code review pairing our experts with your
                  team
                </Li>
                <Li>On-demand workshops based on any arising issues</Li>
                <Li>Deployment & measurement plan</Li>
                <Li>Validated learning and roll-out plan</Li>
              </Ul>
            </SprintCard>
          </Col>
        </Row>
        <Box sx={{ textAlign: "center", mt: [0, "-100px"] }}>
          <Arrow />
        </Box>
      </Grid>
    </Section>
    <Link to="#about-us" name="about-us" />
    <Section dark>
      <Grid>
        <Row>
          <Col md={8}>
            <H2>About us</H2>
            <SupportingText>
              Our Sprints are all about working{" "}
              <strong>with you and your team</strong>
            </SupportingText>
            <P>
              In 1-week/ 2-week bursts we help your team create positive,
              future-facing solutions that are formulated to be on-time and
              on-budget.
            </P>
          </Col>
        </Row>

        <Row>
          <Col>
            <H3a>Our guiding principles</H3a>
          </Col>
          <SmallIconAndSentences
            wrapWithCols={true}
            bulletType={ValueBullet}
            items={[
              {
                image: "learning",
                sentence:
                  "Be unafraid to learn from everyone and believe in teaching what we know",
              },
              {
                image: "caring",
                sentence:
                  "Always aim to treat others how we would want to be treated",
              },
              {
                image: "people",
                sentence:
                  "Ensure what we do is meaningful and always people-centred",
              },
            ]}
          />
        </Row>
      </Grid>
    </Section>
    <Link to="#academy" name="academy" />
    <Section>
      <Grid>
        <Row>
          <Col md={7}>
            <H2>React GraphQL Academy</H2>
            <SupportingText>
              Upskill your team/s in the most effective way for your company
            </SupportingText>
            <P>
              React GraphQL Academy is a LeanJS product. The Academy is offering
              in-person and remote training which can adapt to any company
              regardless of the size or budget. From in-person private team
              training to public bootcamps, your developers work alongside our
              coaches on real-world problems. Part-time or short time
              accelerated formats available.
            </P>

            <LinkButton
              className="visit-academy"
              to="https://reactgraphql.academy/"
              hasArrow
              dark
            >
              Visit the Academy
            </LinkButton>
          </Col>
          <Col md={4} mdOffset={1}>
            <Trainline />
            <NetAPorter sx={{ mt: 2, mb: 2 }} />
            <JohnLewis width={"80%"} />
            <Nationwide />
            <Capgemini />
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default IndexPage

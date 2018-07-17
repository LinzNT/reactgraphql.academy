import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Card from '../components/layout/Card'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H1, H2, H3 } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/Layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import ContactForm from '../components/form/Contact'
import Video from '../components/elements/Video'

const IndexPage = () => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={3} md={6}>
            <H1>Take your career further by mastering the React ecosystem</H1>
            <H2>
              The most complete curriculum from experienced practitioners who
              were the first in Europe to teach React
            </H2>
            <Row>
              <Col xs={6} lg={3} lgOffset={1}>
                <LinkButton
                  extraLarge
                  to="/react-redux-graphql-bootcamp"
                  children="Bootcamp"
                />
              </Col>
              <Col xs={6} lg={7}>
                <Ul inline>
                  <Li>
                    <Link to="/part-time" children="Part-time" />
                  </Li>
                  <Li>|</Li>
                  <Li>
                    <Link
                      to="/about-us#private-on-site-corporate-training"
                      children="Corporate training"
                    />
                  </Li>
                </Ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
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
              <Col>
                <H2>What will I get from a ReactJS Academy course?</H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>
                    Learn how to <strong>build production ready</strong> React
                    applications.
                  </Li>
                  <Li>
                    Discuss <strong>real-world projects</strong> to learn best
                    practices for building scalable React applications.
                  </Li>
                  <Li>
                    <strong>One-to-One mentoring</strong> by the ReactJS Academy
                    coaches and mentors
                  </Li>
                  <Li>
                    Expand your developer knowleadge and{' '}
                    <strong>stay ahead</strong>
                  </Li>
                </Ul>
              </Col>
            </Row>
            <P align="right">
              <Link to="/">Checkout the curriculum</Link>
            </P>
            <AttendeeQuote
              quote="Best training ever! lorem "
              fullname="Joe Foo s sss sss 2"
              job="CTO2"
              company="ASOS.com"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
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
              <Col>
                <H2>Is this training right for me? Why ReactJS Academy</H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>
                    Perfect for <strong>professional developers</strong> who are
                    familiar with good programming practices. This is NOT a
                    learn-to-code bootcamp.
                  </Li>
                  <Li>
                    Great if you are ready for a new challenge - very{' '}
                    <strong>intense project-based training</strong>.
                  </Li>
                  <Li>
                    It's not just a course, it's a{' '}
                    <strong>full hands-on experience</strong>.
                  </Li>
                  <Li>
                    Learn in a collaborative environment. Pair programming and
                    discussions with <strong>like-minded people</strong>{' '}
                    interested in becoming better developers.
                  </Li>
                </Ul>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={5}>
                <LinkButton
                  extraLarge
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamps"
                />
              </Col>
              <Col xs={6} md={5}>
                <LinkButton
                  extraLarge
                  to="/part-time"
                  children="Part-time courses"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <H2>Developers from all these companies have trusted us</H2>
            <Row>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
            </Row>
          </Col>
          <Col md={7}>
            <Video
              width="100%"
              src="https://www.youtube.com/embed/yGwmF4AT1Fg"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <strong>
                Shall we have a video about a client talking about the training
                instead of a photo? John Lewis
              </strong>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col>
                What's in for your company - Why is ReactJS Academy great for
                your team
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>
                    <strong>Increase dev capabilities</strong> - ability to work
                    quicker and with more reliable code.
                  </Li>
                  <Li>
                    <strong>Minimize the risk</strong> of onboarding new tech in
                    an organization by learning from experienced practicioners.
                  </Li>
                  <Li>
                    <strong>Avoid common mitakes</strong>, they could cause
                    delays and loses to your business if made later in real
                    projects. Let developers make mistakes in our safe
                    environment and learn from them.
                  </Li>
                  <Li>
                    <strong>
                      Increase employee retention, motivation, and productivity
                    </strong>{' '}
                    with the right training. Up skill your team with a top
                    quality world-class training.
                  </Li>
                  <Li>
                    Offer <strong>more services</strong> to internal and
                    external clients
                  </Li>
                </Ul>
              </Col>
            </Row>
            <P align="right">
              <Link to="/">Checkout the curriculum</Link>
            </P>
            <AttendeeQuote
              quote="My devs were on training for a week, but when they came back they were React Masters. We adpoted the ecosystem much quicker than we thought possible and now we work faster and more efficiently."
              fullname="Joe home"
              job="CTO"
              company="ASOS.com"
            />
            <Row style={{ marginTop: '30px' }}>
              <Col xs={6} md={5}>
                <LinkButton
                  extraLarge
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamps"
                />
              </Col>
              <Col xs={6} md={5}>
                <LinkButton
                  extraLarge
                  to="/part-time"
                  children="Part-time courses"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <ContactForm />
      </Grid>
    </Section>
  </div>
)

export default IndexPage

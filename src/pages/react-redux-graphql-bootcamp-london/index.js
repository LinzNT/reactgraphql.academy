import React from 'react'
import Section, { TopSection } from '../../components/layout/Section'
import Button, { ButtonSecondary } from '../../components/buttons/Button'
import Grid, { Col, Row } from '../../components/layout/Grid'
import P from '../../components/layout/P'
import ImagePlaceholder from '../../components/wireframes/ImagePlaceholder'
import { H2, H2Ref, H3 } from '../../components/text'
import Ul, { Li } from '../../components/Layout/Ul'
import { CurriculumBootcamp } from '../../components/curriculum'
import { Ribbon, Card, Video } from '../../components/elements'
import Link from '../../components/navigation/Link'
import AttendeeQuote from '../../components/training/AttendeeQuote'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../../components/utils'
import Header from '../../components/layout/Header'
import { TrustedByLogoList } from '../../components/training/TrustedBy'

const BootcampLondon = ({ width }) => (
  <div>
    <Header
      titleLines={['React Redux GraphQL Bootcamp', '20-25 Aug, 2018 - London']}
      subtitle="Take your dev career to the next level by mastering<br />React, Redux, and GraphQL - in just 7 days!"
      links={[
        { text: 'Pricing', to: '#pricing' },
        { text: 'Curriculum', to: '#curriculum' },
        { text: 'Is it right for me?', to: '#target-audience' },
      ]}
    />
    <TopSection>
      <Grid>
        <Card border="shadow" style={{ paddingTop: '35px', marginTop: '26px' }}>
          <Row>
            <Col xs={12} lg={10} lgOffset={1}>
              <H2>Developers from all these companies have trusted us...</H2>
              <TrustedByLogoList />
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Card dark>
          <Row>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <Video
                height="415"
                src="https://www.youtube.com/embed/yvROXLQ1jHg"
              />
            </Col>
            <Col xs={12} md={6} lg={5}>
              <H2Ref>
                Prices{' '}
                <a href="#pricing" name="pricing">
                  #
                </a>
              </H2Ref>
              <P>
                Please be aware that the tickets cover the cost of the training,
                it does not include the cost of the flights and accomodation.
              </P>
              <Card small>
                <H3>
                  <strong>Early bird ticket</strong>
                  <Ribbon>Save 24%</Ribbon>
                </H3>
                <P>Early bird tickes available until 20th July 2018.</P>
                <H3>
                  &pound;1740
                  <Button extraLarge style={{ float: 'right' }}>
                    Buy now
                  </Button>
                </H3>
                <P>
                  By purchasing a training, you agree to our{' '}
                  <Link to="terms-of-service">Terms & Conditions</Link>
                </P>
              </Card>
              <Card small dark border="white" style={{ marginTop: '20px' }}>
                <H3>
                  <strong>Pay by Installments</strong>
                </H3>
                <P>
                  Pay in 3 installments - the first one being 50% of the total
                  cost and the others to follow over 6 months. Contact us and we
                  can talk things through with you.
                </P>
                <H3>
                  &pound;2160
                  <ButtonSecondary extraLarge style={{ float: 'right' }}>
                    Contact us
                  </ButtonSecondary>
                </H3>
              </Card>
            </Col>
          </Row>
        </Card>
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
          <Col md={6}>
            <Row>
              <Col>
                <H2Ref>
                  Is this bootcamp right for me? Are you...{' '}
                  <a href="#target-audience" name="target-audience">
                    #
                  </a>
                </H2Ref>
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
                    A developer with 1+ year of development under your belt?
                  </Li>
                  <Li>
                    Familiar with front-end technologies like JavaScript, CSS,
                    and HTML?
                  </Li>
                  <Li>
                    Taking a step forward to become a React JS Specialist able
                    to make critical decisions in the architecture of a React
                    application.
                  </Li>
                  <Li>
                    Unhappy with online learning and it's lack of 1-on-1
                    mentoring?
                  </Li>
                </Ul>
              </Col>
            </Row>
            <P>If you've said 'yes' to these, our bootcamp could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a lear-to-code bootcamp. If you want to learn to code,
              we recommend you to contact our London-based partner{' '}
              <a href="https://makers.tech/" target="_blanck">
                Makers
              </a>. PLUS you'll get a &pound;250 discount using our reference
              "ReactJS Academy".
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
              quote="I enjoyed the bootcamp so much. It was challenging and so rewarding - the mentors were so helpful, making sense of really complex concepts.... Recommended."
              fullname="Senior Developer"
              job="Cameron Diaz"
              company="Spotify"
              profilePicUrl="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section style={{ paddingBottom: 0 }}>
      <Grid>
        <Card white border="shadow">
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </Section>
  </div>
)

export default BootcampLondon

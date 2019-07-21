import React from 'react'
import Helmet from 'react-helmet'

import { CORP_TRAINING } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrustedByLogoList,
} from 'src/components/training'
import Ul, { Li } from 'src/components/layout/Ul'
import Header from 'src/components/layout/Header'
import { CallToActionRow } from 'src/components/layout/CallToActionRow'
import { Card, Video } from 'src/components/elements'
import CurriculumCorporateGraphQL from 'src/components/curriculum/CurriculumCorporateGraphQL'
import LeanJSsprints from 'src/components/elements/LeanJSsprints'
import { Breadcrumb } from 'src/components/navigation'
import { createSocialMetas } from 'src/components/utils'
import { BOOTCAMP_COLLAB } from 'src/config/images'

const metas = {
  title: 'GraphQL Corporte Training | React GraphQL Academy',
  description:
    'Interested in GraphQL corporate training? We offer corporate GraphQL team training, located in your offices anywhere in the world. Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const CorporateGraphQLTraining = () => (
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
        <Breadcrumb
          path={[
            { to: '/', label: 'Home' },
            {
              to: '/graphql',
              label: 'GraphQL',
            },
            {
              to: '/graphql/training/corporate',
              label: 'Corporate',
            },
          ]}
        />
        <Header
          titleLines={['Corporate GraphQL team training']}
          subtitle="Private team training, located in your offices anywhere in the world, based on our proven curriculum for React and GraphQL."
          links={[
            { text: 'Training schedule', to: '#schedule' },
            { text: 'Developer level', to: '#dev-level' },
            { text: 'Pricing', to: '#pricing' },
            { text: 'Previous clients', to: '#previous-clients' },
            { text: 'Benefits to you', to: '#right-for-my-team' },
            { text: 'Custom training', to: '#custom-training' },
          ]}
          bgImageName={CORP_TRAINING}
        />
        <TopSection>
          <Grid>
            <CallToActionRow>
              <Col mdOffset={1} md={4}>
                <LinkButton
                  variant="primary"
                  to="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/pdfs%2FCorporate%20Team%20Training%20with%20React%20GraphQL%20Academy.pdf?alt=media&"
                  children="Team Training - Key Facts (PDF)"
                />
              </Col>
              <Col mdOffset={1} md={6} />
            </CallToActionRow>
            <a name="schedule" />
            <Card border="shadow">
              <Row>
                <Col md={11}>
                  <CurriculumCorporateGraphQL />
                </Col>
              </Row>
            </Card>
          </Grid>
        </TopSection>
        <Section>
          <Grid>
            <Row>
              <a name="previous-clients" />
              <Col lg={5}>
                <H2>Trusted by industry leaders</H2>
                <TrustedByLogoList />
              </Col>
              <Col lg={6} mdOffset={1}>
                <AttendeeQuote
                  small
                  quote="[Before training with React GraphQL Academy] there wasn't the confidence we would meet our deadlines. Now, management know the deadlines are going to be met - that reduces our risk."
                  fullname="Lara Ramey"
                  job="Senior Developer"
                  company="Meredith Corporation"
                  videoUrl="IeZTDG7S6Dk"
                  ctaButton="How Training Keeps Xing 
              Tech-Relevant (Blog)"
                  ctaUrl="/blog/5-reasons-why-advanced-dev-training-will-keep-your-company-tech-relevant/"
                />
              </Col>
            </Row>
          </Grid>
        </Section>

        <Section>
          <Grid>
            <Row>
              <a name="right-for-my-team" />
              <Col md={5}>
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
              </Col>
              <Col md={5} mdOffset={1}>
                <H2>Why React GraphQL Academy is great for your dev team</H2>
                <Ul>
                  <Li>
                    <strong>Avoid delays & business losses</strong> with more
                    reliable and consistent code
                  </Li>
                  <Li>
                    <strong>Increase employee retention</strong>, motivation,
                    and productivity
                  </Li>
                  <Li>
                    Great for <strong>team building</strong>, and a safe
                    environment for devs to learn.
                  </Li>
                  <Li>
                    <strong>Minimise the risk</strong> of onboarding React
                  </Li>
                  <Li>
                    <strong>Delivered wherever you need</strong> - worldwide!
                  </Li>
                </Ul>
                <P>
                  <LinkButton variant="primary" to="#contact-us">
                    Contact us to find out more
                  </LinkButton>
                </P>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section xsBgDarkGrey>
          <Grid>
            <a name="custom-training" />
            <LeanJSsprints />
          </Grid>
        </Section>
        <UpcomingTrainingSection trainings={trainings} />
      </React.Fragment>
    )}
  </Layout>
)

export default CorporateGraphQLTraining

import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training'
import { Card, Video } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_BOOTCAMP } from 'src/config/data'
import { TrainingCardList } from 'src/components/training'
import LearningResources from 'src/components/blog/LearningResources'
import { LIGHT_BLUE } from 'src/config/styles'

const trainingList = [
  {
    title: 'React Bootcamp',
    text: ` Rapid learning with a deep-dive into the whole React
    Ecosystem`,
    to: '/react/training/bootcamp/',
  },
  {
    title: 'Part-Time Course',
    text: `Maximum flexibility React training that fits around your
    job`,
    to: 'react/training/part-time-course',
  },
  {
    title: 'Corporate Team Training',
    text: ` We come to you, teach skills and best practice to your
    entire team!`,
    to: '/react/training/corporate',
  },
  {
    title: 'React Advanced',
    text: `For React developers who need to supercharge their
    skills`,
    to: '/react/training/advanced/',
  },
  {
    title: '1-day Workshops',
    text: `Covering specific aspects in our Curriculum so you can
    specialise`,
    to: '/react/training/workshops',
  },
]

const ReactPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Helmet
            title="Learn React with us - best way to learn React JS!"
            meta={[
              {
                name: 'description',
                content:
                  'Learn React with us - the best way to learn React JS / ReactJS / React.js!',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/react',
                label: 'React',
              },
            ]}
          />
          <Header
            titleLines={['Learn React with us...']}
            subtitle="Move into the future of development with the React Ecosystem"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Latest React Blogs',
                to: '#free-react-resources',
              },
              {
                text: 'Our React training',
                to: '#our-react-training',
              },
              {
                text: 'What is React?',
                to: '#what-is-react',
              },
              {
                text: 'Should I learn React?',
                to: '#should-i-learn-react',
              },
            ]}
            type={REACT_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Link
                    to="#free-react-resources"
                    name="free-react-resources"
                  />
                  <Col md={5} mdOffset={1}>
                    <LearningResources resources={posts} type="React" />
                  </Col>
                  <Link to="#our-react-training" name="our-react-training" />
                  <Col md={4} mdOffset={1}>
                    <H3>Our React training</H3>
                    <TrainingCardList
                      data={trainingList}
                      borderColor={LIGHT_BLUE}
                    />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <H2>
                    <Link to="#what-is-react" name="what-is-react" />
                    What is React?
                  </H2>
                  <P>
                    Created by Facebook in 2015, React is a JavaScript library -
                    not a framework - that creates user interfaces. Basically,
                    it's a simpler and better way of developing apps because...
                  </P>
                  <Ul>
                    <Li>React is declarative</Li>
                    <Li>It's all about Reusable Components</Li>
                    <Li>React is SEO friendly</Li>
                    <Li>It fully embraces JavaScript</Li>
                    <Li>
                      It's growing at a fast pace and the community is
                      fantastic!
                    </Li>
                  </Ul>
                  <P>
                    <LinkButton to="/blog/top-10-reasons-to-learn-react/">
                      Blog: Why You Should Learn React Right Now
                    </LinkButton>
                  </P>
                </Col>
                <Col md={5} mdOffset={1}>
                  <Link
                    to="#should-i-learn-react"
                    name="should-i-learn-react"
                  />
                  <Video youtubeId="6hmKu1-vW-8" />
                  <P>
                    Polina Stoyanova, a software engineer from tray.io, explains
                    her experiences of learning React on our React Bootcamp
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <TrustedBySection />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query reactPage {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(/react/)/g" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            imageUrl
          }
          excerpt
        }
      }
    }
  }
`

export default ReactPage

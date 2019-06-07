import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Grid, { Col, Row } from '../../components/layout/Grid'
import Header from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb, Link } from '../../components/navigation'
import { TopSection } from '../../components/layout/Section'
import PostCard from '../../components/blog/PostCard'

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Breadcrumb
            path={[{ to: '/', label: 'Home' }, { to: `/blog/`, label: `Blog` }]}
          />
          <Header
            titleLines={['Blog']}
            subtitle="Insights into the world of React GraphQL Academy"
            fullHeight={false}
            paddingBottom={170}
          />
          <TopSection>
            <Grid>
              <Row>
                {posts.map(({ node: post }) => (
                  <Col lg={4} key={post.fields.slug}>
                    <PostCard post={post} />
                  </Col>
                ))}
              </Row>
            </Grid>
          </TopSection>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(/blog/|/react/|/graphql/)/" } } }
      sort: { fields: [frontmatter___order], order: DESC }
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

export default Blog

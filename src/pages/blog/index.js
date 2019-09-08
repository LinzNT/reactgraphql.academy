import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import { Col, Row } from '../../components/layout/Grid'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb } from '../../components/navigation'
import { TopSection } from '../../components/layout/Section'
import PostCard, { getPostsFromNodes } from '../../components/blog/PostCard'

const Blog = ({ data, path }) => {
  const posts = getPostsFromNodes({
    markdownNodes: data.allMarkdownRemark.nodes,
    sanityNodes: data.allSanityPost.nodes,
  })

  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Breadcrumb
            path={[{ to: '/', label: 'Home' }, { to: path, label: `Blog` }]}
          />
          <Header
            titleLines={['Blog']}
            subtitle="Insights into the world of React GraphQL Academy"
            fullHeight={false}
            paddingBottom={170}
          />
          <TopSection>
            <Row>
              {posts.map(post => (
                <Col lg={4} key={post.path}>
                  <PostCard post={post} />
                </Col>
              ))}
            </Row>
          </TopSection>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query blogQuery {
    allSanityPost(sort: { fields: order, order: ASC }) {
      nodes {
        ...SanityPostItemFragment
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "blog" } } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      nodes {
        ...MarkdownPostItemFragment
      }
    }
  }
`

export default Blog

import React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import Grid, { Col, Row } from '../components/layout/Grid'
import { P, Span, H2, H2_STYLE, H3_STYLE, H4_STYLE, H5_STYLE, P_STYLE, H4 } from '../components/text'
import { ANCHOR_STYLE } from '../components/navigation/'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb, Link } from '../components/navigation'
import { FONT_FAMILY, WHITE } from '../config/styles'
import { Image } from '../components/elements'
import ContactForm from '../components/form/Contact'
import { Card } from '../components/elements'
import { blogAuthors } from '../config/data'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
  },
}).Compiler

const Content = styled.div`
  p {
    ${P_STYLE}
  }
  h2 {
    ${H2_STYLE}
  }
  h3 {
    ${H3_STYLE}
  }
  h4 {
    ${H4_STYLE}
  }
  h5 {
    ${H5_STYLE}
  }
  a {
    ${ANCHOR_STYLE}
  }
  ul {
    li {
      ${FONT_FAMILY};
    }
  }
`

const SyledAuthor = styled.div`
  display: flex;
  color: ${WHITE};
  img {
    margin-right: 18px;
    width: 90px;
    height: 90px;
  }
  a {
    display:block;
  } 
`

const SocialShare = styled.div`
 display: flex;
 justify-content: space-evenly;
 div {
  cursor: pointer;
 }
`

const PostMeta = ({ author = 'richard', date = '', timeToRead }) => (
  <SyledAuthor>
    <Image src={blogAuthors[author].imgSrc} circle />
    <P>
      <Link to={`/about-us#${blogAuthors[author].path}`}>By {blogAuthors[author].fullname}</Link>
      <Span>
        {date} <br />
        Reading time: {timeToRead} mins
      </Span>
    </P>
  </SyledAuthor>
)

const ShareButtons = ({ slug }) =>
  (
    <SocialShare>

      <TwitterShareButton
        url={`https://reactjs.academy${slug}`}
        quote={'title'}
        via="reactjsacademy"
      >
        <TwitterIcon
          size={36}
          round />
      </TwitterShareButton>


      <FacebookShareButton
        url={`https://reactjs.academy${slug}`}
        quote={'title'}
      >
        <FacebookIcon
          size={36}
          round />
      </FacebookShareButton>


      <LinkedinShareButton
        url={`https://reactjs.academy${slug}`}
        quote={'title'}
      >
        <LinkedinIcon
          size={36}
          round />
      </LinkedinShareButton>


      <EmailShareButton
        url={`https://reactjs.academy${slug}`}
        quote={'title'}
      >
        <EmailIcon
          size={36}
          round />
      </EmailShareButton>

    </SocialShare>
  )

const BlogPost = ({ data }) => {
  const { title, date, subtitle, author } = data.markdownRemark.frontmatter
  const { htmlAst, timeToRead } = data.markdownRemark
  const { slug } = data.markdownRemark.fields
  const allPosts = data.allMarkdownRemark.edges
  const relatedPosts = allPosts.filter(post => (post.node.fields.slug != slug))
  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: `/blog`, label: `Blog` },
          { to: `/${slug}`, label: `${title}` },
        ]}
      />
      <Header
        titleLines={[`${title}`]}
        fullHeight={false}
        paddingBottom={80}
      >
        <PostMeta date={date} author={author} timeToRead={timeToRead} />
      </Header>
      <Grid>
        <Row>
          <Col md={6} >
            {subtitle ? <H2>{subtitle}</H2> : null}
            {/* <Content dangerouslySetInnerHTML={{ __html: html }} /> */}
            {renderAst(htmlAst)}
          </Col>
          <Col md={4} mdOffset={1}>
            <Card small bg="dark" top={20}>
              <ContactForm simplified />
            </Card>
            {relatedPosts.length ?
              <Card border="shadow" small top={20} >
                <H4>Related articles</H4>
                {relatedPosts.map(post => (
                  <React.Fragment>
                    <P>
                      <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
                      <P>
                        {post.node.frontmatter.date}
                      </P>
                    </P>
                  </React.Fragment>
                ))}
              </Card>
              :
              null
            }
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <P>Share this on: </P>
            <ShareButtons slug={slug} />
          </Col>
        </Row>
      </Grid>

      <UpcomingTrainingSection />
    </React.Fragment >
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
        frontmatter {
          title
          date
          subtitle
          author
        }
          fields {
            slug
          }
          htmlAst
          timeToRead
        }
        allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, limit: 3) {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
  }
`

export default BlogPost

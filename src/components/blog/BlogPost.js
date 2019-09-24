import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { RunkitProvider } from '../blog/Runkit'
import Layout from '../layout.js'
import { formatUTC } from '../utils'
import Grid, { Col, Row } from '../layout/Grid'
import { P, Span, H2, H4, Hr } from '../text'
import Ul, { Li } from '../layout/Ul'
import Header from '../layout/Header'
import { UpcomingTrainingSection } from '../training'
import { Breadcrumb, Link } from '../navigation'
import { WHITE } from '../../config/styles'
import { Image } from '../elements'
import ContactForm from '../form/Contact'
import { Segment } from '../elements'
import ShareButtons from './ShareButtons'

export const formatPostTitle = title =>
  title ? title.replace(/(<([^>]+)>)/gi, ' ') : ''

const StyledAuthor = styled.div`
  display: flex;
  img {
    margin-right: 18px;
    width: 90px !important;
    height: 90px !important;
    border-radius: 50%;
  }
  a,
  p,
  span {
    color: ${WHITE};
  }
  a {
    display: block;
  }
`

const PostMeta = ({
  authorFullname,
  authorImageUrl,
  authorFixedImg,
  authorSlug,
  date = '',
  timeToRead,
}) => (
  <StyledAuthor>
    <Link to={`/team/${authorSlug}/`} className="blog-article">
      {authorFixedImg ? (
        <Image fixed={authorFixedImg} />
      ) : authorImageUrl ? (
        <Image src={authorImageUrl} />
      ) : null}
    </Link>
    <P>
      <Link to={`/team/${authorSlug}/`} className="blog-article">
        By {authorFullname}
      </Link>
      <Span>
        {formatUTC(date)}
        {timeToRead && (
          <React.Fragment>
            <br />
            Reading time: {timeToRead} mins
          </React.Fragment>
        )}
      </Span>
    </P>
  </StyledAuthor>
)

const GridContent = styled(Grid)`
  padding-top: 72px;
`
GridContent.defaultProps = {
  as: 'article',
}

const BlogPost = ({
  body,
  postTypeLabel,
  postTypePath,
  slug,
  authorTwitter,
  authorFullname,
  authorImageUrl,
  authorFixedImg,
  authorSlug,
  mainImagePublicUrl,
  title,
  date,
  subtitle,
  timeToRead,
  relatedPosts = [],
  contents,
}) => (
  <Layout loadAutopilot={false}>
    {({ trainings }) => {
      const mainImageFullPublicUrl =
        mainImagePublicUrl.indexOf('http') === 0
          ? mainImagePublicUrl
          : `https://reactgraphql.academy${mainImagePublicUrl}`
      return (
        <RunkitProvider>
          <Helmet
            title={title}
            meta={[
              {
                name: 'description',
                content: subtitle,
              },
            ]}
          >
            <meta property="og:title" content={title} />
            <meta property="og:image" content={mainImageFullPublicUrl} />
            <meta property="og:description" content={subtitle || title} />
            <meta property="og:type" content="article" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@reactgqlacademy" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={subtitle || title} />
            <meta name="twitter:creator" content={`@${authorTwitter}`} />
            <meta name="twitter:image" content={mainImageFullPublicUrl} />
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: `/${postTypePath}`,
                label: postTypeLabel,
              },
              { to: slug, label: title },
            ]}
          />
          <Header
            titleLines={title.split('<br />')}
            fullHeight={false}
            paddingBottom={80}
            bgImgUrl={mainImagePublicUrl}
            bgColor="transparent"
            bgImageOpacity={1}
          >
            <PostMeta
              date={date}
              authorFullname={authorFullname}
              authorImageUrl={authorImageUrl}
              authorFixedImg={authorFixedImg}
              authorSlug={authorSlug}
              timeToRead={timeToRead}
            />
          </Header>
          <GridContent>
            <Row>
              <Col md={7}>
                {subtitle ? <H2>{subtitle}</H2> : null}
                {contents && (
                  <React.Fragment>
                    <P>On this page:</P>
                    <Ul>
                      {contents.map(({ slug, text }) => (
                        <Li>
                          {text}, <Link to={`#${slug}`}>go to section</Link>.
                        </Li>
                      ))}
                    </Ul>
                  </React.Fragment>
                )}
                {body}
              </Col>
              <Col md={4} mdOffset={1}>
                <Segment small variant="primary" mt={3}>
                  <ContactForm simplified />
                </Segment>
                {relatedPosts.length ? (
                  <Segment border="shadow" small mt={4}>
                    <H4>Related articles</H4>
                    {relatedPosts.splice(0, 5).map((post, index) => (
                      <React.Fragment key={index}>
                        <Link to={post.path} className="blog-article">
                          {formatPostTitle(post.title)}
                        </Link>
                        <P>{formatUTC(post.date || post.publishedAt)}</P>
                      </React.Fragment>
                    ))}
                  </Segment>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <P>Share this on: </P>
                <ShareButtons slug={slug} />
                <Hr />
                <P>
                  This website is built using Gatsbyjs. Curious about how this
                  blog is implemented? It's open source so you can{' '}
                  <Link
                    to="https://github.com/reactgraphqlacademy/reactgraphqlacademy"
                    className="blog-article"
                  >
                    check the source code
                  </Link>
                </P>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Hr />
                <P>
                  Comments? Shoot me a{' '}
                  <Link
                    to={`http://twitter.com/${authorTwitter}`}
                    className="blog-article"
                  >
                    tweet {`@${authorTwitter}`}
                  </Link>{' '}
                  !
                </P>
              </Col>
            </Row>
          </GridContent>
          <UpcomingTrainingSection trainings={trainings} />
        </RunkitProvider>
      )
    }}
  </Layout>
)

export default BlogPost

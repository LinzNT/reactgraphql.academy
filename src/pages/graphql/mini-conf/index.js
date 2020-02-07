import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { LinkButton } from 'src/components/buttons'
import { CheckoutProvider } from 'src/components/payment/checkout'
import PaymentSection from 'src/components/payment/PaymentSection'
import { Link } from 'src/components/navigation'
import Section, { TopSection, ColSection } from 'src/components/layout/Section'
import Gallery, { massageGalleryImages } from 'src/components/elements/Gallery'
import { Col, Row } from 'src/components/layout/Grid'
import Box from 'src/components/layout/Box'
import Flex from 'src/components/layout/Flex'
import { H2, H3, H4, H5, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import ApolloLogo from 'src/components/logos/Apollo'
import RGAWhiteLogo from 'src/components/logos/RGAWhiteLogo'
import ReactSummitLogo from 'src/components/logos/ReactSummit'
import Header from 'src/components/layout/Header'
import TwitterIcon from 'src/components/icons/TwitterIcon'
import GitHubIcon from 'src/components/icons/GitHubIcon'
import WebsiteIcon from 'src/components/icons/WebsiteIcon'

import {
  AlternativeTrainingSection,
  getNextTrainingByTrainingId,
  selectUpcomingTrainings,
} from 'src/components/training'
import { Segment, Image } from 'src/components/elements'
import { GRAPHQL_BOOTCAMP, TECH_GRAPHQL } from 'src/config/data'
import { GRAPHQL_PINK, BLUE, GREY } from 'src/config/styles'
import { createMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import Card from 'src/components/elements/Card'

const REACTSUMMIT_COLOR = '#0f0'

const sponsorsList = [
  {
    element: <ApolloLogo width="100%" height={null} />,
    borderColor: GRAPHQL_PINK,
  },
]

const organizersList = [
  {
    element: <ReactSummitLogo width="80%" height={null} fontColor="#000" />,
    borderColor: REACTSUMMIT_COLOR,
  },
  {
    element: <RGAWhiteLogo width="80%" height={null} />,
    borderColor: BLUE,
    borderImage: `linear-gradient(to top, ${GRAPHQL_PINK}, ${BLUE}) 1 100%;`,
  },

  {
    element: <H2>The Guild</H2>,
    borderColor: GRAPHQL_PINK,
  },
]

const speakers = [
  {
    fullname: 'Alex Lobera',
    job: 'Head Coach at React GraphQL Academy',
    imageSrc:
      'https://pbs.twimg.com/profile_images/1208906846313934848/6h0aRCgw_400x400.jpg',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    links: [
      { url: '', icon: TwitterIcon },
      { url: '', icon: GitHubIcon },
      { url: '', icon: WebsiteIcon },
    ],
  },
]

const metas = {
  title: 'Learn GraphQL | React GraphQL Academy',
  description:
    'Interested in learning GraphQL? Learn GrapQL with us. Supercharge your development skill set with the latest curriculum in GraphQL. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const renderSpeaker = ({ imageSrc, fullname, job, description, links }) => (
  <Flex sx={{ mr: 5, mb: 5, pb: 5, flexDirection: 'column' }}>
    <Flex>
      <Image
        circle
        src={imageSrc}
        sx={{
          width: '120px',
          height: '120px',
          mr: 2,
          mb: 1,
        }}
        alt={`${fullname} ${job}`}
      />
      <Box>
        <H4 sx={{ mb: 1 }}>{fullname}</H4>
        <P sx={{ pb: 1 }}>
          <strong>{job}</strong>
        </P>
        {links && (
          <Ul variants={['inline', 'unstyled']}>
            {links.map(({ url, icon: Icon }) => (
              <Li>
                <Link to={url}>
                  <Icon fill={GREY} />
                </Link>
              </Li>
            ))}
          </Ul>
        )}
      </Box>
    </Flex>
    <P sx={{ fontSize: 1 }}>{description}</P>
  </Flex>
)

const GraphQLPage = ({ data, path, trainings }) => {
  const trainingsInAmsterdam =
    selectUpcomingTrainings({ trainings, city: 'amsterdam' }) || []
  const crossSellTrainings = [
    getNextTrainingByTrainingId({
      trainings,
      trainingId: '5e349275778e880002113474',
    }),
    getNextTrainingByTrainingId({
      trainings,
      trainingId: '5dc6f35fce62530002bd3e92',
    }),
    getNextTrainingByTrainingId({
      trainings: trainingsInAmsterdam,
      trainingId: '5aa2ab2a7dcc782348ea2011',
    }),
  ].filter(t => t)

  const smallGalleryImages = massageGalleryImages(data.images, 'sm')
  const largeGalleryImages = massageGalleryImages(data.images, 'lg')

  const galleryImages = smallGalleryImages.map(
    ({ src, height, width, originalName }, index) => {
      return {
        srcSmall: src,
        // srcLarge: largeGalleryImages[index].src,
        height,
        width,
        originalName,
      }
    }
  )
  return (
    <CheckoutProvider>
      <Helmet
        title={metas.title}
        meta={[
          {
            name: 'description',
            content: metas.description,
          },
        ]}
      >
        {createMetas(metas)}
      </Helmet>
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/graphql', label: 'GraphQL' },
          { to: path, label: 'Mini Conf' },
        ]}
        tech={TECH_GRAPHQL}
        titleLines={['GraphQL Mini Conference Amsterdam']}
        subtitle="6 Speakers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 150 Attendees &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 Evening"
        bgImageName={'mini-conf'}
        bgColors={[GRAPHQL_PINK, REACTSUMMIT_COLOR]}
        showInfoBox={true}
        links={[
          {
            text: 'Speakers',
            to: '#speakers',
          },
          {
            text: 'Sponsors',
            to: '#sponsors',
          },
          {
            text: "What's a Mini Conf",
            to: '#whatisaminiconf',
          },
          {
            text: 'Tickets',
            to: '#tickets',
          },
        ]}
        type={GRAPHQL_BOOTCAMP}
      />
      <TopSection>
        <Segment>
          <Row>
            <Col md={6} mdOffset={1}>
              <H2>
                <a name="speakers" />
                Speakers
              </H2>
              {speakers.map(renderSpeaker)}
              <H3>
                <a name="speakers" />
                Call For Papers
              </H3>
              <P>asdfads</P>
              <P>asdfads</P>
              <P>asdfads</P>
            </Col>
            <Link to="#our-graphql-training" name="our-graphql-training" />
            <Col md={4}>
              <H3>Sponsors</H3>
              {sponsorsList.map(
                ({ element, borderColor = GRAPHQL_PINK }, index) => (
                  <Card
                    variant="primary"
                    sx={{ borderColor, mt: index > 0 ? 6 : 0 }}
                  >
                    {element}
                  </Card>
                )
              )}

              <H3 sx={{ mt: 6 }}>Organizers</H3>
              {organizersList.map(
                (
                  { element, borderImage, borderColor = GRAPHQL_PINK },
                  index
                ) => (
                  <Card
                    variant="primary"
                    sx={{ borderImage, borderColor, mt: index > 0 ? 6 : 0 }}
                  >
                    {element}
                  </Card>
                )
              )}
            </Col>
          </Row>
        </Segment>
      </TopSection>

      <ColSection
        variant="thinRight"
        col={
          <Gallery
            className="pictures-mini-conf-gallery"
            pageLimit={3}
            photos={galleryImages}
          />
        }
        col2={
          <React.Fragment>
            <H2>
              <a name="venues" />
              What is a Mini Conf?
            </H2>
            <P>
              MiniConf is just a shorter version of a Regular conferences you
              got used to.
            </P>
            <P>
              There will be 6 Speakers, 150 attendees, and lots of networking
              and fun!
            </P>
            <P>
              We’ve brought experts from all around the world so you could learn
              about GraphQL best practices and become a part of the GraphQL
              community!
            </P>
          </React.Fragment>
        }
      />
      <Section variant="dark">
        <Row>
          <Col md={5} mdOffset={1}>
            <PaymentSection
            //   training={training}
            />
          </Col>
          <Col md={4} mdOffset={1} sx={{ pt: 3 }}>
            <H3>Query your discount!</H3>
          </Col>
        </Row>
      </Section>
      <AlternativeTrainingSection trainings={crossSellTrainings} />
    </CheckoutProvider>
  )
}

export const query = graphql`
  query {
    images: allFile(
      filter: { absolutePath: { regex: "/pages/graphql/mini-conf/.*.jpg/" } }
    ) {
      nodes {
        publicURL
        name
        childImageSharp {
          original {
            width
            height
          }
        }
      }
    }
  }
`
export default GraphQLPage

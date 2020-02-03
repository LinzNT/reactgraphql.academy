import React from 'react'
import Helmet from 'react-helmet'
import raven from 'raven-js'
import { useStaticQuery, graphql } from 'gatsby'

import selectUpcomingTrainings from './training/selectUpcomingTrainings'
import { createTrainingPath, formatMeetup } from './training/dataUtils'

import './reset.css'
import './layout.css'
import { SENTRY_DSN } from '../config/apps'
import Menu from '../components/navigation/menu'
import Footer from '../components/layout/Footer'
import favicon from './favicon.ico'
import AcceptCookies from '../components/layout/AcceptCookies'
import FONT_BARLOW_400_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-400.woff2'
import FONT_BARLOW_800_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-800.woff2'

raven.config(SENTRY_DSN).install()

const makeSureTheseFontsAreUsedOnTheWebsiteIfYouArePreloadingThem = [
  FONT_BARLOW_400_LATIN_EXT_WOFF2,
  FONT_BARLOW_800_LATIN_EXT_WOFF2,
]
const preloadUrls = makeSureTheseFontsAreUsedOnTheWebsiteIfYouArePreloadingThem.map(
  url => ({
    rel: 'preload',
    href: url,
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'crossorigin',
  })
)
let prefetchDnsUrls = [
  'https://connect.facebook.net',
  'https://www.google-analytics.com',
]
const prefetchDnsLinks = prefetchDnsUrls.map(href => ({
  rel: 'dns-prefetch',
  href,
}))

const layoutQuery = graphql`
  query layoutTraining {
    site {
      siteMetadata {
        title
        description
      }
    }
    upmentoring {
      eventsConnection(
        filter: { ownerId: "5aaa9b07f146e5cfafad189e", startDate: future }
        orderBy: { sort: startDate, direction: ASC }
      ) {
        edges {
          node {
            id
            title
            startDate
            utcOffset
            endDate
            city
            cityCountry
          }
        }
      }
      trainingInstancesConnection(
        filter: { ownerId: "5aaa9b07f146e5cfafad189e", startDate: future }
        orderBy: { sort: startDate, direction: ASC }
      ) {
        edges {
          node {
            id
            startDate
            utcOffset
            endDate
            isOnline
            city
            cityCountry
            daysOfTheWeek
            address
            venueName
            mapUrl
            price
            currency
            training {
              id
              type
              slug
              description {
                title
              }
            }
          }
        }
      }
    }
  }
`

const Layout = ({ children }) => {
  // TODO only add preconnect to 'https://api.upmentoring.com' in training instance page
  // let preconnectUrls = ['https://api.upmentoring.com']
  let preconnectUrls = []
  // let scriptUrls = []
  //if (loadAutopilot) {
  preconnectUrls = [...preconnectUrls, 'https://api.autopilothq.com']
  //}
  const preconnectLinks = preconnectUrls.map(href => ({
    crossorigin: 'crossorigin',
    rel: 'preconnect',
    href,
  }))

  const cityIndex = {}
  const formatTraining = ({ node }) => {
    const { training } = node
    const { type, slug, description } = training || {}
    const { title = '' } = description || {}
    const { city = '', id, isOnline } = node
    const key = `${city}${type}${slug}`
    cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1

    return {
      ...node,
      title,
      type,
      training: {
        ...training,
        toPath: createTrainingPath({
          type,
          id,
          slug,
        }),
      },
      toPath: createTrainingPath({
        type,
        city,
        index: cityIndex[key],
        id,
        slug,
        isOnline,
      }),
    }
  }
  //   const scriptTags = scriptUrls.map(src => (
  //     <script type="text/javascript" async="true" src={src} key={src} />
  //   ))

  const data = useStaticQuery(layoutQuery)
  const trainings = data.upmentoring.trainingInstancesConnection.edges.map(
    formatTraining
  )
  const meetups = data.upmentoring.eventsConnection.edges.map(formatMeetup)
  const trainingAndEvents = selectUpcomingTrainings({
    trainings: [...trainings, ...meetups],
  })

  return (
    <React.Fragment>
      <React.Fragment>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={data && data.site && data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data && data.site && data.site.siteMetadata.description,
            },
          ]}
          link={[
            ...preloadUrls,
            ...prefetchDnsLinks,
            ...preconnectLinks,
            {
              rel: 'icon',
              type: 'image/x-icon',
              href: `${favicon}`,
            },
          ]}
        >
          {/* {scriptTags} */}
        </Helmet>
        <Menu />
        {/* {typeof children === 'function'
          ? children({
              trainings: selectUpcomingTrainings({
                trainings: [...trainings, ...meetups],
              }),
            })
          : children} */}
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            trainings: trainingAndEvents,
          })
        )}
        <Footer />
        <AcceptCookies />
      </React.Fragment>
    </React.Fragment>
  )
}

export default Layout

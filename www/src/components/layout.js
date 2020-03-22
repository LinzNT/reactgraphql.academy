import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import raven from 'raven-js'
import { useStaticQuery, graphql } from 'gatsby'

import selectUpcomingTrainings from './training/selectUpcomingTrainings'
import {
  createTrainingPath,
  formatMeetup,
  formatConf,
} from './training/dataUtils'

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

export const TRAINING_TYPE_FIELD_ID = '5e74cf154993d031a662905b'
export const TRAINING_TECH_FIELD_ID = '5e74837b4993d031a65e5446'

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
            __typename
            meetup {
              id
            }
            id
            title
            price
            currency
            startDate
            utcOffset
            endDate
            city
            cityCountry
            mapUrl
            address
            venueName
          }
        }
      }
      trainingInstancesConnection(
        filter: { ownerId: "5aaa9b07f146e5cfafad189e", startDate: future }
        orderBy: { sort: startDate, direction: ASC }
      ) {
        edges {
          node {
            __typename
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
            title
            training {
              id
              slug
              customFieldsValues {
                values
                fieldId
              }
            }
            trainingInstanceType {
              name
              title
              id
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
    const { training, title, trainingInstanceType, city = '', isOnline } = node
    // const { type, slug, description, id: trainingId } = training || {}
    const { slug, id: trainingId } = training || {}
    // const { title = '' } = description || {}
    const remoteOrCity = isOnline ? 'remote' : city
    // const type = training && training.customFieldsValues  && training.customFieldsValues.length
    const type = training.customFieldsValues.find(
      ({ fieldId }) => fieldId === TRAINING_TYPE_FIELD_ID
    ).values[0]
    const tech = training.customFieldsValues.find(
      ({ fieldId }) => fieldId === TRAINING_TECH_FIELD_ID
    ).values[0]
    const trainingInstanceTypeName =
      trainingInstanceType && trainingInstanceType.name
    const key = `${remoteOrCity}${slug}${trainingInstanceTypeName}`
    cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1

    return {
      ...node,
      trainingInstanceTypeName,
      shoppingItemEnum: 'training',
      title,
      type, // rename type with trainingType ??
      tech,
      training: {
        ...training,
        toPath: createTrainingPath({
          trainingId,
          slug,
          type,
          tech,
          trainingInstanceTypeName,
        }),
      },
      toPath: createTrainingPath({
        city: remoteOrCity,
        index: cityIndex[key],
        trainingId,
        slug,
        trainingInstanceTypeName,
        type,
        tech,
        // isOnline,
      }),
    }
  }

  const data = useStaticQuery(layoutQuery)

  const trainings = useMemo(
    () =>
      data.upmentoring.trainingInstancesConnection.edges.map(formatTraining),
    [data]
  )

  const meetups = data.upmentoring.eventsConnection.edges
    // HEADSUP remove this when we deploy gql mini conf
    .filter(({ node: { meetup } }) => meetup && meetup.id)
    .map(formatMeetup)
  const confs = data.upmentoring.eventsConnection.edges
    .filter(({ node: { meetup } }) => !meetup || !meetup.id)
    .map(formatConf)
  const trainingAndEvents = selectUpcomingTrainings({
    trainings: [...trainings, ...meetups, ...confs],
  })

  console.log('aaa', trainingAndEvents)
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

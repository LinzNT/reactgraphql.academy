import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import 'normalize.css'
import './reset.css'
import { Provider } from 'rebass'
import { ThemeProvider, injectGlobal } from 'styled-components'

import rebassTheme, { globalStyles } from './rebass-theme'
import Menu from '../components/navigation/menu'
import Footer from '../components/layout/Footer'
import './index.css'

// Inject global styles required by Rebass
injectGlobal(globalStyles)

const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      sm: 46, // rem
      md: 64, // rem
      lg: 64, // rem
    },
  },
}

const Layout = ({ children, data }) => (
  <ThemeProvider theme={gridTheme}>
    <Provider theme={rebassTheme}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Menu />
      {children()}
      <Footer />
    </Provider>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

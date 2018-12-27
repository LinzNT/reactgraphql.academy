import React from 'react'
import styled from 'styled-components'
import Ul, { Li } from '../layout/Ul'
import Grid, { Row, Col } from '../layout/Grid'
import Link, { styleChildLinkColor } from './Link'

import { blue2, WHITE, Z_INDEX_MEDIUM } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'

const BreadcrumbContainer = styled.nav`
  position: absolute;
  top: 103px;
  left: 0;
  width: 100%;
  z-index: ${Z_INDEX_MEDIUM};
  ul {
    background-color: ${blue2(0.9)};
    padding-left: 16px;
    li {
      padding-left: 0px;
      padding-right: 4px;
      ${styleChildLinkColor(WHITE)} a {
        font-size: 16px;
        text-shadow: 1px -1px 17px #367088;
      }
    }
    li + li:before {
      padding-right: 4px;
      padding-left: 0;
      color: ${WHITE};
      content: '>';
    }

    @media (max-width: ${SCREEN_XS_MAX}) {
      li {
        padding: 5px;
      }
    }
  }
`

const Breadcrumb = ({ path }) =>
  path && path.length ? (
    <BreadcrumbContainer ariaLabel="Breadcrumb">
      <Grid>
        <Row>
          <Col>
            <Ul inline>
              {path.map(({ to, label }) => {
                const formatedLabel = label.replace('<br/>', ' ')

                return (
                  <Li key={to}>
                    {to ? <Link to={to}>{formatedLabel}</Link> : formatedLabel}
                  </Li>
                )
              })}
            </Ul>
          </Col>
        </Row>
      </Grid>
    </BreadcrumbContainer>
  ) : null

export default Breadcrumb

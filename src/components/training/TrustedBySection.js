import React from 'react'
import styled from 'styled-components'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { Video, Card } from '../elements'
import Ul, { Li } from '../layout/Ul'
import { H2 } from '../text'
import {
  Trainline,
  ASOS,
  Blockchain,
  JohnLewis,
  Capgemini,
  FinancialTimes as DefaultFinancialTimes,
  SainBurys,
  Tesco,
  Telegraph,
  Xing,
  IBM,
  IKEA,
  Microsoft,
} from '../logos'
import { GREY, REACT_BLUE_DARK } from '../../config/styles'
import { SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'

// TODO THIS IS NOT WORKING, THE IMAGE IS TOO BIG ON MOBILE
const FinancialTimes = styled(DefaultFinancialTimes)`
  @media (max-width: ${SCREEN_SM_MAX}) {
    height: 18;
  }
`

const CompanyList = styled(Ul)`
  overflow: hidden;
  li {
    margin-left: 0;
    padding: 0.5rem 1rem 1.5rem 0;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      margin-left: 0;
      padding-left: 0;
    }
  }
`
export const TrustedByLogoList = () => (
  <CompanyList inline>
    <Li>
      <Capgemini
        colour={REACT_BLUE_DARK}
        secColour={REACT_BLUE_DARK}
        height={47}
      />
    </Li>
    <Li>
      <FinancialTimes colour={REACT_BLUE_DARK} height={30} />
    </Li>
    <Li>
      <IBM colour={REACT_BLUE_DARK} height={50} width={100} />
    </Li>
    <Li>
      <Microsoft colour={REACT_BLUE_DARK} height={50} width={280} />
    </Li>
    <Li>
      <IKEA colour={REACT_BLUE_DARK} height={50} />
    </Li>
    <Li>
      <Tesco
        colour={REACT_BLUE_DARK}
        secColour={REACT_BLUE_DARK}
        stroke={REACT_BLUE_DARK}
        height={40}
      />
    </Li>
    <Li>
      <Xing colour={REACT_BLUE_DARK} height={48} y={20} />
    </Li>
  </CompanyList>
)

const TrustedBySection = () => (
  <Section xsBgDark>
    <Grid>
      <Card bg="dark">
        <Row>
          <Col xs={12} lg={10} lgOffset={1}>
            <H2>Trusted by industry leaders:</H2>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={5} lgOffset={1}>
            <TrustedByLogoList />
          </Col>
          <Col md={6} lg={5}>
            <Video youtubeId="yvROXLQ1jHg" />
          </Col>
        </Row>
      </Card>
    </Grid>
  </Section>
)

export default TrustedBySection

import React from 'react'
import styled from 'styled-components'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { Video } from '../elements'
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
} from '../logos'
import { GREY, BLUE2, BROWN, WHITE } from '../../styles'
import { SCREEN_SM_MAX } from '../utils'

// TODO THIS IS NOT WORKING, THE IMAGE IS TOO BIG ON MOBILE
const FinancialTimes = styled(DefaultFinancialTimes)`
  @media (max-width: ${SCREEN_SM_MAX}) {
    height: 18;
  }
`

const CompaniesBox = styled.div`
  background-color: ${BLUE2};
  border: solid 1px ${BROWN};
  padding: 60px 0 40px 0;
  h2 {
    color: ${WHITE};
  }
`

const CompanyList = styled(Ul)`
  overflow: hidden;
  li {
    margin-left: 10px;
  }
`

const TrustedBy = () => (
  <Section>
    <Grid>
      <CompaniesBox>
        <Row>
          <Col xs={12} lg={10} lgOffset={1}>
            <H2>Developers from all these companies have trusted us</H2>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={5} lgOffset={1}>
            <CompanyList inline>
              <Li>
                <ASOS colour={GREY} height={35} />
              </Li>
              <Li>
                <Blockchain colour={GREY} height={30} />
              </Li>
              <Li>
                <Capgemini colour={GREY} secColour={GREY} height={47} />
              </Li>
              <Li>
                <JohnLewis colour={GREY} height={35} />
              </Li>
              <Li>
                <FinancialTimes colour={GREY} height={30} />
              </Li>
              <Li>
                <SainBurys colour={GREY} height={35} />
              </Li>
              <Li>
                <Tesco
                  colour={GREY}
                  secColour={GREY}
                  stroke={GREY}
                  height={40}
                />
              </Li>
              <Li>
                <Telegraph colour={GREY} height={40} />
              </Li>
              <Li>
                <Trainline colour={GREY} height={48} y={5} />
              </Li>
            </CompanyList>
          </Col>
          <Col md={6} lg={5}>
            <Video src="https://www.youtube.com/embed/yvROXLQ1jHg" />
          </Col>
        </Row>
      </CompaniesBox>
    </Grid>
  </Section>
)

export default TrustedBy

import React from 'react'
import styled from 'styled-components'
import { P } from '../text'
import { Col, Row } from '../layout/Grid'
import Link from '../navigation/Link'
import { selectTypeColor } from '../utils'
import { MEETUP, ONE_DAY_WORKSHOP } from '../../config/data'

const TrainingItemCol = styled(Col)`
  padding-bottom: 16px;
`

const TrainingRow = styled(Row)`
  margin-bottom: 1em;
`

const Calendar = styled(Link)`
  border: 3px solid ${props => selectTypeColor(props.type)};
  padding: 10px;
  font-family: barlow;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 1.16rem;
  text-decoration: none;
  line-height: normal;
`

const selectTitle = ({ type, description, venueName }) => {
  switch (type) {
    case MEETUP:
      return venueName
    case ONE_DAY_WORKSHOP:
      return description.title
    default:
      return type
  }
}

const TrainingItem = ({
  type,
  description,
  cityCountry,
  startDay,
  startMonth,
  path,
  venueName = '',
}) => (
  <React.Fragment>
    <TrainingRow>
      <TrainingItemCol xs={5} md={3}>
        <Calendar type={type} to={path}>
          {startDay}
          <br />
          {startMonth}
        </Calendar>
      </TrainingItemCol>
      <TrainingItemCol xs={7} md={7}>
        <P>
          {selectTitle({ type, description, venueName })}
          <br />
          {cityCountry}
          <br />
          <Link to={path}>Find out more</Link>
        </P>
      </TrainingItemCol>
    </TrainingRow>
  </React.Fragment>
)

export default TrainingItem

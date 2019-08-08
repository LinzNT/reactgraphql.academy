import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumOneDayRedux'
import { REACT_WORKSHOP, ADVANCED_REACT, REACT_BOOTCAMP } from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP]

const Page = props => (
  <BaseTemplate
    {...props}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page

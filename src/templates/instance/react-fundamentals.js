import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/CurriculumReactFundamentals'
import { PART_TIME, REACT_BOOTCAMP, REACT_FUNDAMENTALS } from 'src/config/data'

export const crossSellTypes = [PART_TIME, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_FUNDAMENTALS}
    typeOfTraining="React fundamentals training"
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export default Page

import React, { useState, useEffect } from 'react'
import { H4 } from '../text'
import { Element } from 'react-scroll'
import Link from '../navigation/Link'
import trackUserBehaviour, {
  CURRICULUM_MORE_DETAILS,
} from '../utils/trackUserBehaviour'
import { selectTypeColor, selectBorderStyle } from '../utils'
import { getURLParameter } from '../utils/url'
import Box from '../layout/Box'
import Card from '../elements/Card'

// DELETE NEXT FUNCTION AFTER GRAPHQL REFACTORING
export const curriedToggleNavigateTo = to => section =>
  to ? `${to}&section=${section}` : false

export const navigateToSection = (to, section) =>
  section ? `${to}&section=${section}` : to

// Feedback disabled temporarly.
// const StyledFeedback = styled(Flex)`
//   border: 2px dashed ${PINK};
//   max-width: 320px;
// `
// StyledFeedback.defaultProps = {
//   p: 3,
//   my: 3,
//   jc: 'center',
// }

// const Feedback = () => (
//   <StyledFeedback>
//     Any questions?
//     <Link className="training-curriculum-link-clicks" ml={1} to="#contact-us">
//       Contact us
//     </Link>
//   </StyledFeedback>
// )

const CurriculumSection = props => {
  const isOpen =
    props.isOpen ||
    (getURLParameter('section') === props.name &&
      getURLParameter('tab') === props.type)

  const [isTabOpen, setIsOpen] = useState(isOpen)

  const toggleSubSection = () => {
    setIsOpen(prevState => !prevState)
  }

  useEffect(() => {
    trackUserBehaviour({
      event: CURRICULUM_MORE_DETAILS,
      payload: {
        courseOutline: props.title,
      },
    })
  }, [isTabOpen, props.title])

  const {
    title,
    name,
    type,
    subTitle,
    trainingDateTime = '',
    children,
    enableToggle = false,
    toggleNavigateTo,
    showLinkToCurriculum = true,
    mt,
  } = props

  const toogleLinkProps =
    toggleNavigateTo && !enableToggle
      ? {
          to: navigateToSection(toggleNavigateTo, name),
        }
      : { onClick: toggleSubSection }

  const subsection = isTabOpen ? (
    <Box pt={1}>
      {children}
      {/* <Feedback /> */}
      {enableToggle || showLinkToCurriculum ? (
        <Link
          className="training-curriculum-link-clicks"
          duration={200}
          to={`#${name || title}`}
          onClick={toggleSubSection}
        >
          Hide detail
        </Link>
      ) : null}
    </Box>
  ) : (
    <Link
      className="curriculum training-curriculum-link-clicks"
      {...toogleLinkProps}
    >
      Find out more
    </Link>
  )

  return (
    <Card
      borderStyle={selectBorderStyle(type)}
      borderColor={selectTypeColor(type)}
      mt={mt}
    >
      <Element name={name || title} />
      {title ? (
        <H4 mb={1}>
          {title} {trainingDateTime && <small>{trainingDateTime}</small>}
        </H4>
      ) : (
        ''
      )}
      <Box m={0} pb={3} lineHeight={2}>
        {addFullStopAtTheEnd(subTitle)} {` `}
        {subsection}
      </Box>
    </Card>
  )
}

const addFullStopAtTheEnd = text =>
  text && text.replace ? text.replace(/([^.])$/, '$1.') : ''

CurriculumSection.defaultProps = {
  mt: 4,
}

export default CurriculumSection

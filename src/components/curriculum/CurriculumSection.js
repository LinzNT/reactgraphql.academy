import React from 'react'
import styled from 'styled-components'
import { H4, P } from '../text'
import { blue1, GREY2, YELLOW, LIGHT_RED, REACTBLUEDARK } from '../../config/styles'
import { Element } from 'react-scroll'
import { Link } from '../navigation'
import trackUserBehaviour, {
  CURRICULUM_MORE_DETAILS,
} from '../utils/trackUserBehaviour'
import { REACT_NATIVE, REACT_BOOTCAMP, PART_TIME, ADVANCED_REACT } from '../../config/data';


export const curriedToggleNavigateTo = to => section =>
  to ? `${to}&section=${section}` : false

const selectTypeColor = (type) => {
  switch (type) {
    case REACT_BOOTCAMP:
      return REACTBLUEDARK
    case PART_TIME:
    return  GREY2
    case REACT_NATIVE:
      return  LIGHT_RED
    case ADVANCED_REACT:
      return YELLOW
    default:
      return GREY2
  }
}

const Section = styled.div`
  ${props => 
    `border-left: 3px solid ${selectTypeColor(props.type)};`
  }
  margin-top: 2em;
  padding-left: 20px;
`

export const CurriculumSubSection = styled.div`
  padding-top: 5px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`
const CurriculumItemTitle = styled(H4)`
  margin-bottom: 0.5em;
`

class CurriculumSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.isOpen || false,
    }
  }

  toggleSubSection = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen,
      },
      () => {
        if (this.state.isOpen) {
          // send event to analytics
          trackUserBehaviour({
            event: CURRICULUM_MORE_DETAILS,
            payload: {
              section: this.props.title,
            },
          })
        }
      }
    )
  }

  render() {
    const { isOpen } = this.state
    const {
      title,
      name,
      subTitle,
      children,
      showToggle = true,
      toggleNavigateTo,
    } = this.props
    const { toggleSubSection } = this
    const toogleLinkProps = toggleNavigateTo
      ? {
          to:
            typeof toggleNavigateTo === 'function'
              ? toggleNavigateTo(name)
              : toggleNavigateTo,
        }
      : { onClick: toggleSubSection }
    const childrenWithToggle = isOpen ? (
      <CurriculumSubSection>
        {children}
        <Link duration={500} to={name || title} onClick={toggleSubSection}>
          Hide detail
        </Link>
      </CurriculumSubSection>
    ) : (
      <Link {...toogleLinkProps}>More detail</Link>
    )
    const childrenWithoutToggle = (
      <CurriculumSubSection>{children}</CurriculumSubSection>
    )
    const type = () => {
      const { title } = this.props
      let type
      if (title.includes('Session')) {
        type = PART_TIME
      } 
      if (title.includes('Native')) {
        type = REACT_NATIVE
      } 
      if (title.includes('Advanced')){
        type = ADVANCED_REACT
      }
      if (title.includes('Bootcamp')) {
        type = REACT_BOOTCAMP
      }
      return type
    }

    return (
      <Section type={type()}>
        <Element name={name || title} />
        {title ? <CurriculumItemTitle>{title}</CurriculumItemTitle> : ''}
        <P>
        {`${subTitle ? subTitle : ''} - `}
        {showToggle ? childrenWithToggle : childrenWithoutToggle}
        </P> 
      </Section>
    )
  }
}

export default CurriculumSection

import styled from 'styled-components'
import Link, { styleChildLinkColor } from '../../../navigation/Link'
import React from 'react'
import DefaultUl, { Li } from '../../../layout/Ul'
import MenuData from '../Menu.json'
import { HideComponentsUsingCss } from '../../../utils'
import { WHITE } from '../../../../config/styles'
import ItemSubmenu from './ItemSubmenu'

const Ul = styled(DefaultUl)`
  > li {
    margin: 0 !important;
    padding-left: 10px;
    padding-right: 12px;
    color: ${WHITE};
    ${styleChildLinkColor(WHITE)};
    a {
      text-shadow: 0px 0px 1px ${WHITE};
    }
  }
`

class Item extends React.Component {
  render() {
    const { text, submenuItems, variant, variants, ...rest } = this.props

    return (
      <Li variant={variant} variants={variants}>
        {submenuItems ? (
          <ItemSubmenu
            className="navigation"
            items={submenuItems}
            text={text}
            to={rest.to}
            {...rest}
          />
        ) : (
          <Link {...rest}>{text}</Link>
        )}
      </Li>
    )
  }
}

export const DesktopMenuItem = styled(Item).attrs(props => ({
  className: 'navigation',
}))`
  margin: 0 0 0 6px;
`
DesktopMenuItem.displayName = 'DesktopMenuItem'

const DesktopMenu = () => (
  <HideComponentsUsingCss xs sm>
    <Ul variant="inline">
      {MenuData.map(item => (
        <DesktopMenuItem
          key={item.to}
          to={item.to}
          text={item.text}
          submenuItems={item.children}
        />
      ))}
    </Ul>
  </HideComponentsUsingCss>
)

export default DesktopMenu

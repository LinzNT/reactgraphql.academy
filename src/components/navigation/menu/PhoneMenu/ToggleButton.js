import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WHITE } from '../../../../config/styles'

const ToggleButton = ({ toggleMenu, className, isOpen }) => (
  <div className={className}>
    <label for="main-menu-button">Menu button</label>
    <input
      type="checkbox"
      name="main-menu-button"
      id="main-menu-button"
      checked={isOpen}
      onClick={toggleMenu}
    />
    <span />
    <span />
    <span />
  </div>
)

const StyledToggleButton = styled(ToggleButton)`
  position: fixed;
  width: 36px;
  height: 30px;
  right: 30px;
  top: 40px;
  z-index: 9991;

  label {
    display: none;
  }

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: ${WHITE};
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }
  span:nth-last-child(1) {
    transform-origin: 0% 100%;
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
  }
  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`

StyledToggleButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
}

export default StyledToggleButton

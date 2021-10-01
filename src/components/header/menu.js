import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import LanguageSwitcher from "../language-switcher"

import Nav from "./nav"

const StyledMenuWrapper = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  flex-direction: column;
  display: ${props => (props.isVisible ? "block" : "none")};
  top: 3.25rem;
  padding-bottom: 2rem;
  box-shadow: ${props => (props.isVisible ? "0 1px 6px grey" : null)};

  @media only screen and (min-width: 1201px) {
    position: absolute;
    background-color: transparent;
    width: 80%;
    box-shadow: none;
  }

  @media only screen and (max-width: 1200px) {
    z-index: 100;
  }
`
const StyledBreak = styled.div`
  margin: 0 1rem 1rem 1rem;
  border-bottom: 1px solid ${myTheme.color["blue-4"]};
  z-index: 1000;

  @media only screen and (min-width: 1201px) {
    margin: 0 1rem 1rem 0;
  }
`

const StyledSwitchWrapper = styled.div`
  margin: 8px 0;
`

const Menu = (props, { isVisible, handleClick }) => {
  return (
    <StyledMenuWrapper {...props} className={isVisible ? "opened" : "closed"}>
      <StyledBreak />
      <Nav handleClick={handleClick} />
      <StyledSwitchWrapper>
        {/* {props.desktop ? null : <LanguageSwitcher />} */}
      </StyledSwitchWrapper>
    </StyledMenuWrapper>
  )
}

export default Menu

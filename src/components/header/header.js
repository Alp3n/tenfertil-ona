import React, { useState } from "react"
import styled from "styled-components"

import { useMediaQuery } from "react-responsive"

import Logo from "../logo/logo"
import Menu from "./menu"
import MenuButton from "./menu-button"
import Nav from "./nav"

const StyledHeaderSmall = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
`

const StyledHeaderBig = styled.header`
  display: flex;
  max-width: 1520px;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
`

const Header = () => {
  const [isVisible, setVisible] = useState(false)
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })

  const handleClick = () => {
    setVisible(isVisible => !isVisible)
  }

  return (
    <>
      {isTabletOrMobile && (
        <StyledHeaderSmall>
          <Logo width="125px" />
          <MenuButton handleClick={handleClick} isVisible={isVisible} />
        </StyledHeaderSmall>
      )}
      {isBigScreen && (
        <StyledHeaderBig>
          <Logo width="200px" />
          <Nav flex="flex" />
        </StyledHeaderBig>
      )}
      <Menu
        isVisible={isVisible}
        //  links={links}
      />
    </>
  )
}

export default Header

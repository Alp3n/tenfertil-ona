import React, { useState } from "react"
import styled from "styled-components"

import Logo from "../logo/logo"
import Menu from "./menu"
import MenuButton from "./menu-button"

const StyledHeaderSmall = styled.div`
  position: fixed;
  display: flex;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: white;
`

const HeaderMobile = () => {
  const [isVisible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(isVisible => !isVisible)
  }

  return (
    <>
      <StyledHeaderSmall isVisible={isVisible}>
        <Logo width="125px" />
        <MenuButton handleClick={handleClick} isVisible={isVisible} />
      </StyledHeaderSmall>

      <Menu isVisible={isVisible} />
    </>
  )
}
export default HeaderMobile

import React from "react"
import styled from "styled-components"

import HeaderMobile from "./header/header-mobile"
import FooterMobile from "./footer/footer-mobile"
import "./layout.css"

const StyledBody = styled.div`
  justify-self: center;
  margin: 0 auto;
  max-width: 1520px;
  overflow: hidden;
`

const LayoutMobile = ({ children }) => {
  return (
    <>
      <HeaderMobile />
      <StyledBody>
        <main>{children}</main>
      </StyledBody>
      <FooterMobile
        email={`info@nhinstitute.pl`}
        number={`+48 666 368 005`}
        company={`Sp.z o.o. Białozora 9, 02-817 Warszawa, Polska\nKRS: 0000861627. REGON: 38710727.\nNIP: 9512507706.`}
      />
    </>
  )
}

export default LayoutMobile

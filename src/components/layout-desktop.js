import React from "react"
import styled from "styled-components"

import HeaderDesktop from "./header/header-desktop"
import Product from "./product/product"

import "./layout.css"

import FooterDesktop from "./footer/footer-desktop"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const FixedProduct = styled.div`
  position: fixed;
  top: 25vh;
  width: 40%;
  margin-left: 5%;
`

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
`

const LayoutDesktop = ({ children }) => {
  return (
    <StyledLayout>
      <HeaderDesktop />
      <FixedProduct>
        <Product width="50vh" height="30vh" />
      </FixedProduct>
      <StyledRight>{children}</StyledRight>

      <FooterDesktop
        email={`info@nhinstitute.pl`}
        number={`+48 666 368 005`}
        company={`Sp.z o.o. Białozora 9, 02-817 Warszawa,\nPolska KRS: 0000861627. REGON: 38710727. NIP: 9512507706.`}
      />
    </StyledLayout>
  )
}

export default LayoutDesktop

import React from "react"
import styled from "styled-components"
import Button from "../button/button"
import Logo from "../logo/logo"

const StyledWrapper = styled.div`
  /* margin-top: 1rem; */
`

const StyledLogoWrapper = styled.div`
  width: 70%;
  margin-bottom: 1rem;
`

const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: 300;
  line-height: 42px;
  width: 70%;
`

const StyledP = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  width: 60%;
`

const AboutTenfertil = ({ heading, paragraph, buttonLabel, to }) => {
  return (
    <StyledWrapper>
      <StyledLogoWrapper id="about">
        <Logo />
      </StyledLogoWrapper>
      <StyledH2>{heading}</StyledH2>
      <StyledP>{paragraph}</StyledP>
      <Button to={to} label={buttonLabel} />
    </StyledWrapper>
  )
}

export default AboutTenfertil

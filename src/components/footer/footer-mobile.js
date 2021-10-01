import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import LogoCss from "../logo/logo-css"
import { CgSmartphone, CgMail } from "react-icons/cg"

const StyledFooterWrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  background-color: ${myTheme.color.background};
  color: #ffffff;
`

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledContactWrapper = styled.div`
  display: flex;
  margin: 1rem;
`
const StyledContactText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  padding: 0 8px;
`

const FooterMobile = ({ number, email, company }) => {
  return (
    <StyledFooterWrapper id="footer">
      <LogoCss companyName={`Nutrition Health Institute`} />
      {/* <LogoNhi width="250px" /> */}
      <StyledInfoWrapper>
        <StyledContactWrapper>
          <StyledContactText>
            <CgSmartphone color={"#ffffff"} size="24px" />
            <StyledText size={myTheme.typography["text-p"]}>
              {number}
            </StyledText>
          </StyledContactText>
          <StyledContactText>
            <CgMail color={"#ffffff"} size="24px" />
            <StyledText size={myTheme.typography["text-p"]}>{email}</StyledText>
          </StyledContactText>
        </StyledContactWrapper>
        <StyledText size={myTheme.typography["text-p3"]}>{company}</StyledText>
      </StyledInfoWrapper>
      <StyledText>© {new Date().getFullYear()} Nhinstitute</StyledText>
    </StyledFooterWrapper>
  )
}
export default FooterMobile

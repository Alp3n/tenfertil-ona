import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
// import LogoCss from "../logo/logo-css"
import { CgSmartphone, CgMail } from "react-icons/cg"
import LogoCss from "../logo/logo-css"

const StyledFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding: 3rem 0;
  background-color: ${myTheme.color.background};
  color: #ffffff;
  margin-top: 10%;
`

const StyledContent = styled.div`
  width: 55%;
`
const StyledInfoWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`

const StyledContactWrapper = styled.div`
  flex-direction: column;
  margin-right: 5rem;
`
const StyledContactText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const StyledText = styled.p`
  padding-left: 1rem;
  margin: 0;
`

const FooterDesktop = ({ number, email, company }) => {
  return (
    <StyledFooterWrapper id="footer">
      <StyledContent>
        <LogoCss companyName={`Nutrition Health Institute`} />
        {/* <LogoNhi width="30%" /> */}
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
              <StyledText size={myTheme.typography["text-p"]}>
                {email}
              </StyledText>
            </StyledContactText>
          </StyledContactWrapper>
          <StyledText size={myTheme.typography["text-p3"]}>
            {company}
          </StyledText>
        </StyledInfoWrapper>
        <p>© {new Date().getFullYear()} Nhinstitute</p>
      </StyledContent>
    </StyledFooterWrapper>
  )
}
export default FooterDesktop

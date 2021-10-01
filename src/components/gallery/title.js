import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  margin: 5rem 0;
  padding: 0;
`

const StyledP = styled.p`
  font-weight: 300;
  font-size: 30px;
  margin-bottom: 0 !important;
  /* font-family: "Oswald"; */
`

const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  margin: 0;
  /* font-family: "Oswald"; */
`
const StyledLine = styled.div`
  background-color: ${myTheme.color.background};
  height: 8px;
  width: 300px;
  margin: 2% 0 0 0;
`

const Title = ({ heading, paragraph }) => {
  return (
    <StyledWrapper>
      <StyledP>{paragraph}</StyledP>
      <StyledH1>{heading}</StyledH1>
      <StyledLine />
    </StyledWrapper>
  )
}
export default Title

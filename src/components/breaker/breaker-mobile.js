import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  background-color: ${props =>
    props.plain ? "#ffffff" : myTheme.color.background};
  white-space: pre-wrap;
  color: ${props => (props.plain ? myTheme.color["blue-1"] : "#ffffff")};
  .plain {
    background-color: transparent;
  }
`

const StyledH1 = styled.h1`
  font-weight: 700;
  /* font-family: "Oswald"; */
  font-size: 28px;
  margin: 1rem 0;
`
const StyledH2 = styled.h2`
  font-size: ${props => (props.plain ? "18px" : "20px")};
  font-weight: ${props => (props.plain ? "300" : "400")};
  line-height: 1.5;
`

const BreakerMobile = ({ heading, texts, id, plain }) => {
  return (
    <StyledWrapper id={id} plain={plain}>
      <StyledH1>{heading}</StyledH1>
      {texts.map(text => (
        <StyledH2 key={text} plain={plain}>
          {text}
        </StyledH2>
      ))}
    </StyledWrapper>
  )
}

export default BreakerMobile

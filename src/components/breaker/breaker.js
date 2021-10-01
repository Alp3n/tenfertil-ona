import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: ${props => (props.plain ? "3rem 0 0 0" : "5rem 0")};
  margin: ${props => (props.plain ? "0" : "2rem 0")};
  background-color: ${props =>
    props.plain ? "#ffffff" : myTheme.color.background};
  white-space: pre-wrap;
  color: ${props => (props.plain ? myTheme.color["blue-4"] : "#ffffff")};
`

const Styled50 = styled.div`
  width: 50%;
  margin-right: 5%;
  z-index: 666;
`

const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  /* font-family: "Oswald"; */
`
const StyledH2 = styled.h2`
  width: 80%;
  font-size: ${props => (props.plain ? "22px" : "30px")};
  font-weight: ${props => (props.plain ? "300" : "400")};
`

const Breaker = ({ texts, heading, id, plain }) => {
  return (
    <StyledWrapper id={id} plain={plain}>
      <Styled50>
        <StyledH1>{heading}</StyledH1>
        {texts.map(text => (
          <StyledH2 key={text} plain={plain}>
            {text}
          </StyledH2>
        ))}
      </Styled50>
    </StyledWrapper>
  )
}

export default Breaker

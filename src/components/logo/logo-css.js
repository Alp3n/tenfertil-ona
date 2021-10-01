import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const circles = [
  {
    color: myTheme.color["blue-2"],
    top: "-1px",
    left: "-2px",
  },
  {
    color: myTheme.color["blue-3"],
    top: "0",
    left: "0",
  },
  {
    color: myTheme.color["blue-4"],
    top: "1px",
    left: "2px",
  },
]

const StyledIconWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 32px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 16px;
  }
`
const StyledCircleWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
  margin-right: 8px;
  top: 2px;
  @media only screen and (max-width: 700px) {
    top: 5px;
  }
`

const StyledCircle = styled.div`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100%;
  width: 26px;
  height: 26px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};

  @media only screen and (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`

const StyledText = styled.span`
  color: #fff;
  font-weight: 300;
  /* font-family: "Oswald"; */
  font-size: 30px;
  font-stretch: condensed;

  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }
`

const LogoCss = ({ companyName }) => {
  return (
    <StyledIconWrapper href="https://nhinstitute.pl" target={"_blank"}>
      <StyledCircleWrapper>
        {circles.map(circle => (
          <StyledCircle
            key={circle.color}
            color={circle.color}
            top={circle.top}
            left={circle.left}
          />
        ))}
      </StyledCircleWrapper>
      <StyledText>{companyName}</StyledText>
    </StyledIconWrapper>
  )
}
export default LogoCss

import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const circles = [
  {
    color: myTheme.color["portrait-1"],
    left: "-30px",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  {
    color: myTheme.color["portrait-2"],
    left: "10px",
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
  {
    color: myTheme.color["portrait-3"],
    left: "-10px",
    height: "90%",
    width: "90%",
    zIndex: 3,
  },
]

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledCirclesWrapper = styled.div`
  display: flex;
  height: 250px;
  width: 250px;
  position: relative;
  justify-content: center;
  align-items: center;
  transform: scale(0.6);
  -webkit-transform: scale(0.6, 0.6);
`

const StyledCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 2px solid white;
  background-color: white;
  height: 80%;
  width: 80%;
  z-index: 4;
`

const StyledBackground = styled.div`
  position: absolute;
  background-color: ${props => props.color};
  left: ${props => props.left};
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 100%;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 85%;
`

const StyledHeader = styled.h1`
  font-weight: 400;
  font-size: 22px;
  /* font-family: "Oswald"; */
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
`

const StyledP = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
`

const CirclesMobile = ({ image, text, header }) => {
  return (
    <StyledWrapper>
      <StyledCirclesWrapper>
        <StyledCircle>{image}</StyledCircle>
        {circles.map(circle => (
          <StyledBackground
            key={circle.color}
            color={circle.color}
            left={circle.left}
            height={circle.height}
            width={circle.width}
            zIndex={circle.zIndex}
          />
        ))}
      </StyledCirclesWrapper>
      <StyledContent>
        <StyledHeader>{header}</StyledHeader>
        <StyledP>{text}</StyledP>
      </StyledContent>
    </StyledWrapper>
  )
}

export default CirclesMobile

import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const circles = [
  {
    color: myTheme.color["portrait-1"],
    left: "-30px",
    height: "95%",
    width: "95%",
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

const StyledCirclesWrapper = styled.div`
  display: flex;
  height: 210px;
  width: 210px;
  position: relative;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);
`

const StyledCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 2px solid white;
  background-color: white;
  height: 100%;
  width: 100%;
  z-index: 4;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);
`

const StyledImage = styled.div`
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
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
  margin-left: 5%;
  max-width: 35%;
`

const StyledWrapper = styled.div`
  display: flex;
  margin: 0 3rem 1rem 3rem;
  align-items: center;
`

const StyledHeader = styled.p`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 400;
  /* font-family: "Oswald"; */
`

const StyledP = styled.p`
  font-size: 22px;
  font-weight: 300;
`

const Circles = ({ image, text, header }) => {
  return (
    <StyledWrapper>
      <StyledCirclesWrapper>
        <StyledCircle>
          <StyledImage>{image}</StyledImage>
        </StyledCircle>
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

export default Circles

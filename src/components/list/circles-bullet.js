import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const circles = [
  {
    color: myTheme.color["portrait-1"],
    left: "-4px",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  {
    color: myTheme.color["portrait-2"],
    left: "2px",
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
  {
    color: myTheme.color["portrait-3"],
    left: "-1px",
    height: "80%",
    width: "80%",
    zIndex: 3,
  },
]

const StyledCirclesWrapper = styled.div`
  display: flex;
  height: 2rem;
  width: 2rem;
  position: relative;
  justify-content: center;
  align-items: center;
`

const StyledCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  height: 70%;
  width: 70%;
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

const CirclesBullet = () => {
  return (
    <StyledCirclesWrapper>
      <StyledCircle />
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
  )
}

export default CirclesBullet

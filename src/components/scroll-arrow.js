import React from "react"
import styled from "styled-components"
import myTheme from "../styles/myTheme"

const StyledScrollArrowWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 0;
  }
`

const StyledScrollArrowButton = styled.div`
  position: absolute;
  padding: 1.5rem; /* Arrow size */
  box-shadow: 1px -1px 0 1px ${myTheme.color["blue-1"]} inset;
  -webkit-box-shadow: 2px -2px ${myTheme.color["blue-1"]} inset;
  border: solid transparent;
  border-width: 2rem 2rem 2rem 2rem;
  transition: 0.2s;
  transform: rotate(${props => props.direction});

  :hover {
    cursor: pointer;
    box-shadow: 2px -2px 0 2px ${myTheme.color.button} inset;
    -webkit-box-shadow: 4px -4px ${myTheme.color.button} inset;
  }

  @media only screen and (max-width: 1200px) {
    padding: 1rem;

    :hover {
      cursor: none;
      box-shadow: 1px -1px 0 1px ${myTheme.color["blue-1"]} inset;
      -webkit-box-shadow: 2px -2px ${myTheme.color["blue-1"]} inset;
    }
    :focus {
      box-shadow: 1px -1px 0 1px ${myTheme.color["blue-1"]} inset;
      -webkit-box-shadow: 2px -2px ${myTheme.color["blue-1"]} inset;
    }
  }
`

const ScrollArrow = ({ direction, onClick }) => {
  return (
    <StyledScrollArrowWrapper>
      <StyledScrollArrowButton onClick={onClick} direction={direction} />
    </StyledScrollArrowWrapper>
  )
}

export default ScrollArrow

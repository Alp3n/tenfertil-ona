import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import Button from "../button/button"
import CirclesBullet from "./circles-bullet"

const StyledList = styled.div`
  margin: 1rem;

  @media only screen and (min-width: 1201px) {
    width: 70%;
  }

  div:last-child div:last-child,
  div:last-child div:last-child p {
    margin-bottom: 0;
  }
`

const StyledListPoint = styled.div`
  display: flex;
  position: relative;
  border-left: 1px solid ${myTheme.color.button};
`
const StyledBullet = styled.div`
  position: absolute;
  left: -1rem;
  justify-self: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-bottom: 2rem;
  width: 90%;
`

const StyledHeading = styled.h2`
  font-size: 30px;
  font-weight: 400;
  /* font-family: "Oswald"; */
  text-transform: uppercase;
  @media only screen and (max-width: 1200px) {
    font-size: 22px;
  }
`
const StyledText = styled.p`
  font-size: 22px;
  font-weight: 300;
  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }
`

const List = ({ list, online, offline, label }) => {
  return (
    <StyledList>
      {list.map(item => (
        <StyledListPoint
          key={online ? item.name : offline ? item.address : item.header}
        >
          <StyledBullet>
            <CirclesBullet />
          </StyledBullet>
          {online ? (
            <StyledTextBox>
              <StyledHeading>{item.name}</StyledHeading>
              <Button href={item.href} label={label} />
            </StyledTextBox>
          ) : offline ? (
            <StyledTextBox>
              <StyledHeading>{item.name}</StyledHeading>
              <StyledText>{item.address}</StyledText>
            </StyledTextBox>
          ) : (
            <StyledTextBox>
              <StyledHeading>{item.header}</StyledHeading>
              <StyledText>{item.text}</StyledText>
            </StyledTextBox>
          )}
        </StyledListPoint>
      ))}
    </StyledList>
  )
}

export default List

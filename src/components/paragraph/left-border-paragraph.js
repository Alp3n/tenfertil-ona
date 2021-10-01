import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  margin: 2rem 0;
  padding-left: 3rem;
  width: 70%;
  border-left: 1px solid ${myTheme.color.button};
  white-space: pre-wrap;
`
const StyledP = styled.p`
  font-size: 22px;
  font-weight: 300;
`

const LeftBorderP = ({ texts }) => {
  return (
    <StyledWrapper>
      {texts.map(text => (
        <StyledP key={text}>{text}</StyledP>
      ))}
    </StyledWrapper>
  )
}

export default LeftBorderP

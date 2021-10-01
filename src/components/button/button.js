import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"

const StyledButtonTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 0.8rem 3rem;
  &:hover {
    background-color: ${myTheme.color["blue-4"]};
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

const StyledButtonHref = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 0.8rem 3rem;

  &:hover {
    background-color: ${myTheme.color["blue-4"]};
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  } ;
`

const Button = ({ label, to, href, className }) => {
  return (
    <>
      {href ? (
        <StyledButtonHref href={href} target={`_blank`} {...className}>
          {label}
        </StyledButtonHref>
      ) : (
        <StyledButtonTo to={to} {...className}>
          {label}
        </StyledButtonTo>
      )}
    </>
  )
}

export default Button

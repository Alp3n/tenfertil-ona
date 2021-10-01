import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"
import { useTranslation } from "react-i18next"

const StyledList = styled.ul`
  margin: 0;
  line-height: 1.8rem;

  @media only screen and (min-width: 1201px) {
    display: flex;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  color: ${myTheme.color["blue-4"]};

  &:visited {
    color: ${myTheme.color["blue-4"]};
  }

  &:hover {
    color: ${myTheme.color.button};
  }
`

const StyledListPoint = styled.li`
  list-style: none;
  margin: 0 1.2rem;
`

const StyledNav = styled.nav`
  align-self: center;
  margin: 0;
  pad: 0;
`

const Nav = props => {
  const { t } = useTranslation()
  return (
    <StyledNav>
      <StyledList {...props}>
        {t("navbar.links").map(link => (
          <StyledListPoint key={link.href}>
            <StyledLink to={link.href}>{link.name}</StyledLink>
          </StyledListPoint>
        ))}
      </StyledList>
    </StyledNav>
  )
}

export default Nav

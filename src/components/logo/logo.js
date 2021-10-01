import React from "react"
import styled from "styled-components"
import ImageLogo from "../image-logo"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: ${props => (props.mobile ? "5%" : null)};
`

const Logo = ({ width, mobile }) => {
  return (
    <StyledLink to={"/"} mobile={mobile}>
      <ImageLogo width={width} />
    </StyledLink>
  )
}
export default Logo

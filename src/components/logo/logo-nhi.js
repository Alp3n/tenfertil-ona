import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  width: ${props => props.width};
  /* height: auto; */
  margin-bottom: 2rem;
`

const LogoNhi = props => {
  const data = useStaticQuery(graphql`
    query {
      nhi: file(name: { eq: "nhi" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a href="https://nhinstitute.pl" target="_blank" rel="noreferrer">
      <StyledImg fluid={data.nhi.childImageSharp.fluid} {...props} />
    </a>
  )
}

export default LogoNhi

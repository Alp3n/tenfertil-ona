import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import myTheme from "../styles/myTheme"

const StyledWrapper = styled.div`
  width: 55%;
  height: 50px;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: ${myTheme.color.button};
  z-index: 999999;

  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 55%;
    /* margin-right: 0.7%; */
  }

  @media screen and (max-width: 1200px) {
    position: static;
    width: 100%;
    z-index: 1;
    margin-top: ${props => (props.marginTop ? "3rem" : null)};
  }
`
const StyledImage = styled(Img)`
  width: 45px;
  height: 70px;
  transform: scale(0.5);
  margin: 0 0 0 2rem;
  @media screen and (max-width: 1200px) {
    width: 55px;
    height: 80px;
    transform: scale(0.5);
    margin: 0 0 0 2rem;
  } ;
`
const StyledText = styled.p`
  margin: 0;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 14px;
  padding: 1rem;
  @media screen and (max-width: 1200px) {
    font-size: 11px;
    padding: 0;
  } ;
`

const Recommendation = ({ marginTop }) => {
  const data = useStaticQuery(graphql`
    query {
      recommendationImage: file(name: { eq: "pta" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledWrapper marginTop={marginTop}>
      <StyledImage fluid={data.recommendationImage.childImageSharp.fluid} />
      <StyledText>
        Rekomendowany przez polskie towarzystwo andrologiczne
      </StyledText>
    </StyledWrapper>
  )
}

export default Recommendation

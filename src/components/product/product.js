import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/button"
import { useTranslation } from "react-i18next"

const StyledImg = styled(Img)`
  margin-bottom: 4vh;
  min-width: ${props => props.width};
  left: 30px;
`

const StyledWrapper = styled.div`
  display: flex;
  max-height: auto;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 700px) {
    margin-top: 5%;
  }
`

const Product = ({ width, height, buttonOff, isVN }) => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      imageLogoSmall: file(name: { eq: "tenfertil" }) {
        childImageSharp {
          fluid(quality: 1) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      <StyledImg
        fluid={data.imageLogoSmall.childImageSharp.fluid}
        width={width}
        height={height}
      />
      {buttonOff ? null : <Button to={`/buy`} label={t("whereToBuy")} />}
    </StyledWrapper>
  )
}

export default Product

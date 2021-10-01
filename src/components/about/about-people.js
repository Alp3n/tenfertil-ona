import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PersonPortrait from "./person-portrait"
import Button from "../button/button"

import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  padding-left: 3rem;
  border-left: 1px solid ${myTheme.color.button};
`

const AboutPeople = ({ people, label }) => {
  const data = useStaticQuery(graphql`
    query People {
      rokicki: file(relativePath: { eq: "portrait/p1rokicki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grodzicka: file(relativePath: { eq: "portrait/p2grodzicka.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      # wolski: file(relativePath: { eq: "portrait/p3wolski.jpg" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 800) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    }
  `)
  return (
    <>
      <StyledWrapper>
        <PersonPortrait
          image={data.rokicki.childImageSharp.fluid}
          text={people.rokicki.titles}
          header={people.rokicki.name}
        />
        <PersonPortrait
          image={data.grodzicka.childImageSharp.fluid}
          text={people.grodzicka.titles}
          header={people.grodzicka.name}
        />
        {/* <PersonPortrait
          image={data.wolski.childImageSharp.fluid}
          text={people.wolski.titles}
          header={people.wolski.name}
        /> */}
      </StyledWrapper>
      <div style={{ marginTop: `90px` }}>
        <Button href={`https://www.nhinstitute.pl`} label={label} />
      </div>
    </>
  )
}
export default AboutPeople

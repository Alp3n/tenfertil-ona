import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GalleryImage from "./galleryImage"

const StyledGalleryBig = styled.div`
  display: grid;
  margin-bottom: 5%;
  grid-template-columns: repeat(4, minmax(1fr, 400px));
  grid-template-rows: repeat(2, minmax(30vh, 35vh));
  grid-gap: 0.5rem;
  grid-template-areas:
    "img1 img1 img2 img2"
    "img3 img3 img2 img2";

  .p1 {
    grid-area: img1;
  }
  .p2 {
    grid-area: img2;
  }
  .p3 {
    grid-area: img3;
  }
`

const GalleryDesktop = () => {
  const data = useStaticQuery(graphql`
    query ImagesGalleryDesktop {
      imagesBig: allFile(
        filter: { relativeDirectory: { eq: "jpg" } }
        limit: 3
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledGalleryBig>
      {data.imagesBig.nodes.map(image => (
        <GalleryImage
          key={image.id}
          image={image.childImageSharp.fluid}
          area={image.name}
        />
      ))}
    </StyledGalleryBig>
  )
}

export default GalleryDesktop

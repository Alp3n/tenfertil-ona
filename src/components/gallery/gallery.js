import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import GalleryImage from "./galleryImage"

const StyledGallerySmall = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(2, minmax(250px, 270px));
  grid-gap: 0.5rem;
  grid-template-areas:
    "img1 img2"
    "img3 img4";

  .p-1 {
    grid-area: img1;
  }
  .p-2 {
    grid-area: img2;
  }
  .p-3 {
    grid-area: img3;
  }
  .p-4 {
    grid-area: img4;
  }
`

const StyledGalleryBig = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 300px);
  grid-gap: 6px;
  grid-template-areas:
    "img6 img6 img1 img2"
    "img3 img3 img5 img4";

  .p-1 {
    grid-area: img1;
  }
  .p-2 {
    grid-area: img2;
  }
  .p-3 {
    grid-area: img3;
  }
  .p-4 {
    grid-area: img4;
  }
  .p-5 {
    grid-area: img5;
  }
  .p-6 {
    grid-area: img6;
  }
`

const Gallery = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })

  const data = useStaticQuery(graphql`
    query ImagesGallery {
      imagesSmall: allFile(
        filter: { relativeDirectory: { eq: "jpg" } }
        sort: { fields: name }
        limit: 4
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
      imagesBig: allFile(filter: { relativeDirectory: { eq: "jpg" } }) {
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
    <>
      {isTabletOrMobile && (
        <StyledGallerySmall>
          {data.imagesSmall.nodes.map(image => (
            <GalleryImage
              key={image.id}
              image={image.childImageSharp.fluid}
              area={image.name}
            />
          ))}
        </StyledGallerySmall>
      )}
      {isBigScreen && (
        <StyledGalleryBig>
          {data.imagesBig.nodes.map(image => (
            <GalleryImage
              key={image.id}
              image={image.childImageSharp.fluid}
              area={image.name}
            />
          ))}
        </StyledGalleryBig>
      )}
    </>
  )
}

export default Gallery

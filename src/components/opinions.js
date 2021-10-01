import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import myTheme from "../styles/myTheme"
import { useMediaQuery } from "react-responsive"
import ScrollArrow from "./scroll-arrow"

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  /* height: 400px; */
  /* padding: 10rem 0; */

  white-space: pre-wrap;

  .backArrow {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    /* padding: 3rem 0; */
  }
`
const StyledBackground = styled(Img)`
  position: absolute;
  width: 100%;
  height: 680px;
  opacity: 0.3;
  z-index: -1;
  /* object-fit: fill; */
  @media screen and (max-width: 1200px) {
    height: 400px;
  }
`

const Styled50 = styled.div`
  position: absolute;
  display: flex;
  width: 50%;
  /* height: 500px; */
  margin-right: 5%;
  align-items: center;
  z-index: 666;

  .backArrow {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    /* padding: 2rem 2rem 0 2rem; */
    margin-right: 0;

    .backArrow {
      display: inline-block;
    }
  }
`

const StyledH1 = styled.h1`
  width: 85%;
  /* font-family: "Oswald", sans-serif; */
  font-size: 48px;
  @media screen and (max-width: 1200px) {
    font-size: 27px;
  }
`
const StyledH2 = styled.h2`
  font-size: 30px;
  opacity: 1;
  @media screen and (max-width: 1200px) {
    font-size: 19px;
  }
`
const StyledInfo = styled.div`
  margin-left: 2rem;
  .fadeIn {
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const StyledArrows = styled.div`
  display: flex;
  gap: 4rem;
`

const Opinions = ({ opinions }) => {
  const [opinionsArray, setOpinionsArray] = useState(() => opinions)
  const [opinion, setOpinion] = useState(0)
  const [fade, setFade] = useState(false)
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  //TODO ANIMATION AND PICTURE CHANGE
  const data = useStaticQuery(graphql`
    query ImageOpinions {
      opinion1: allFile(filter: { name: { eq: "opinion1" } }, limit: 1) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      opinion2: allFile(filter: { name: { eq: "opinion2" } }, limit: 1) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      opinion3: allFile(filter: { name: { eq: "opinion3" } }, limit: 1) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      opinion4: allFile(filter: { name: { eq: "opinion4" } }, limit: 1) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const handleForward = () => {
    if (opinion >= opinionsArray.length - 1) {
      setFade(true)
      setOpinion(0)
    } else {
      setFade(true)
      setOpinion(prev => prev + 1)
    }
  }
  const handleBackward = () => {
    if (opinion <= 0) {
      setFade(true)
      setOpinion(opinionsArray.length - 1)
    } else {
      setFade(true)
      setOpinion(prev => prev - 1)
    }
  }
  console.log(data)
  return (
    <StyledWrapper>
      <StyledBackground
        fluid={
          opinion === 0
            ? data.opinion1.nodes[0].childImageSharp.fluid
            : opinion === 1
            ? data.opinion2.nodes[0].childImageSharp.fluid
            : opinion === 2
            ? data.opinion3.nodes[0].childImageSharp.fluid
            : opinion === 3
            ? data.opinion4.nodes[0].childImageSharp.fluid
            : null
        }
        objectFit="cover"
        objectPosition="30% 50%"
      />
      <Styled50>
        <StyledInfo
          className={fade ? "fadeIn" : "none"}
          onAnimationEnd={() => setFade(false)}
        >
          <StyledH1>{opinionsArray[opinion].heading}</StyledH1>
          <StyledH2>{opinionsArray[opinion].signature}</StyledH2>
        </StyledInfo>
        <StyledArrows>
          {isBigScreen ? null : (
            <ScrollArrow
              direction={"45deg"}
              onClick={() => handleBackward()}
              className={`backArrow`}
            />
          )}

          <ScrollArrow direction={"-135deg"} onClick={() => handleForward()} />
        </StyledArrows>
      </Styled50>
    </StyledWrapper>
  )
}

export default Opinions

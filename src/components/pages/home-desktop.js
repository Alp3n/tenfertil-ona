import React from "react"
import styled from "styled-components"

import List from "../list/list"
import GalleryDesktop from "../gallery/gallery-desktop"
import Title from "../gallery/title"
import Breaker from "../breaker/breaker"
import Tips from "../circles/tips"
import LeftBorderP from "../paragraph/left-border-paragraph"
import AboutTenfertil from "../about/about-tenfertil"
import AboutPeople from "../about/about-people"
// import Recommendation from "../recommendation"
import Opinions from "../opinions"
import myTheme from "../../styles/myTheme"
import { CgChevronUp } from "react-icons/cg"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"

const StyledGalleryWrapper = styled.div`
  width: 55%;
  padding: 0 5% 0 0;
  /* padding: 1.1rem 5% 0 0; */
  z-index: 99;
`
const Styled50 = styled.div`
  width: 55%;
  z-index: 999;
`
const StyledLink = styled(Link)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  width: 48px;
  height: 48px;
  background-color: ${myTheme.color.button};
  text-decoration: none;
  z-index: 9999;

  :hover {
    cursor: pointer;
  }
`

const HomeDesktop = () => {
  const { t } = useTranslation()
  return (
    <>
      <StyledLink to={"/"}>
        <CgChevronUp size={`24px`} color={`white`} />
      </StyledLink>

      {/* <Recommendation /> */}

      <StyledGalleryWrapper>
        <GalleryDesktop />
      </StyledGalleryWrapper>
      <Styled50>
        {/* <Title heading={t("title.heading")} paragraph={t("title.paragraph")} /> */}
      </Styled50>
      <Styled50>
        <AboutTenfertil
          heading={t("aboutTenferil.heading")}
          paragraph={t("aboutTenferil.paragraph")}
          buttonLabel={t("aboutTenferil.buttonLabel")}
          to={t("leaflet")}
        />
      </Styled50>
      <Styled50>
        <LeftBorderP texts={t("leftBorderP")} />
      </Styled50>
      <Breaker
        heading={t("breakerFacts.heading")}
        texts={t("breakerFacts.texts")}
        id={t("breakerFacts.id")}
      />
      <Styled50>
        <List list={t("facts")} />
      </Styled50>
      <Breaker
        heading={t("breakerTips.heading")}
        texts={t("breakerTips.texts")}
      />
      <Styled50>
        <Tips list={t("tips")} width="260px" />
      </Styled50>
      {/* <Opinions opinions={t("opinions").map(opinion => opinion)} /> */}
      <Breaker
        heading={t("breakerNhi.heading")}
        texts={t("breakerNhi.texts")}
        plain={true}
      />
      <Styled50>
        <AboutPeople people={t("people")} label={t("learnMore")} />
      </Styled50>
    </>
  )
}

export default HomeDesktop

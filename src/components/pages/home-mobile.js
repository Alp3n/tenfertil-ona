import React from "react"
import styled from "styled-components"

import List from "../list/list"
import GalleryMobile from "../gallery/gallery-mobile"

import BreakerMobile from "../breaker/breaker-mobile"
import TipsMobile from "../circles/tips-mobile"
import AboutPeopleMobile from "../about/about-people-mobile"
// import Recommendation from "../recommendation"
// import Opinions from "../opinions"

import Logo from "../logo/logo"
import Product from "../product/product"
import Button from "../button/button"

import { CgShoppingCart, CgChevronUp } from "react-icons/cg"
import myTheme from "../../styles/myTheme"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`

const StyledMargin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 2rem;
`

const StyledH1 = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  /* font-family: "Oswald"; */
  margin: 2rem 0;
`
const StyledH2 = styled.h2`
  font-size: 20px;
  font-weight: 300;
  /* font-family: "Oswald"; */
`

const StyledP = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 8px;
`

const StyledP2 = styled.p`
  font-size: 18px;
  font-weight: 300;
  width: 100%;
`

const StyledCart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(524px - 48px);
  right: 0;
  width: 48px;
  height: 48px;
  border: none;
  padding: 0;

  background-color: ${myTheme.color.button};
  z-index: 999;
`
const StyledLink = styled(Link)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(524px - 100px);
  right: 0;
  width: 48px;
  height: 48px;
  background-color: ${myTheme.color.button};
  text-decoration: none;
  z-index: 999;
`

const HomeDesktop = () => {
  const { t } = useTranslation()
  return (
    <>
      <GalleryMobile />
      {/* <Recommendation /> */}
      <StyledCart to={"/buy"}>
        <CgShoppingCart size="24px" color={myTheme.color.white} />
      </StyledCart>
      <StyledLink to={"/"}>
        <CgChevronUp size={`24px`} color={`white`} />
      </StyledLink>

      <StyledWrapper>
        <Logo width="280px" mobile />

        {/* <StyledH1>{t("title.heading")}</StyledH1> */}

        <Product width="300px" />

        <StyledMargin>
          <StyledH2 id="about">{t("aboutTenferil.heading")}</StyledH2>

          <StyledP>{t("aboutTenferil.paragraph")}</StyledP>

          {t("leftBorderP").map(text => (
            <StyledP2 key={text}>{text}</StyledP2>
          ))}

          <Button to={t("leaflet")} label={t("aboutTenferil.buttonLabel")} />
        </StyledMargin>

        <BreakerMobile
          heading={t("breakerFacts.heading")}
          texts={t("breakerFacts.texts")}
          id={t("breakerFacts.id")}
        />

        <StyledMargin>
          <List list={t("facts")} />
        </StyledMargin>
        {/* <Recommendation /> */}
        <div style={{ marginTop: "30px" }}>
          <Product width="300px" />
        </div>

        <BreakerMobile
          heading={t("breakerTips.heading")}
          texts={t("breakerTips.texts")}
          id={t("breakerTips.id")}
        />

        <TipsMobile list={t("tips")} />
        {/* <Recommendation marginTop /> */}
        {/* <Opinions opinions={t("opinions").map(opinion => opinion)} /> */}
        <BreakerMobile
          heading={t("breakerNhi.heading")}
          texts={t("breakerNhi.texts")}
          plain={true}
        />

        <AboutPeopleMobile people={t("people")} label={t("learnMore")} />
      </StyledWrapper>
    </>
  )
}

export default HomeDesktop

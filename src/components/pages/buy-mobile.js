import React from "react"
import styled from "styled-components"
import List from "../list/list"
import { online, offline } from "../../content/data/apteki"
import Product from "../product/product"
import Button from "../button/button"
import myTheme from "../../styles/myTheme"
import { useTranslation } from "react-i18next"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
`

const StyledWrapperBreaker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  padding: 3rem 0;
  background-color: ${myTheme.color.background};
  color: #ffffff;
  white-space: pre-wrap;
  padding: 1.5rem;
`

const StyledMargin = styled.div`
  width: 90%;
  margin: 0 auto;
`
const StyledH1 = styled.h1`
  font-size: 27px;
  font-weight: 700;
  /* font-family: "Oswald"; */
  margin: 2rem 0;
`

const StyledH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 1.45rem;
`

const BuyMobile = () => {
  const { t } = useTranslation()
  return (
    <StyledWrapper>
      <Product width={`300px`} buttonOff />
      <StyledWrapperBreaker>
        <StyledH1>{t("buy.heading")}</StyledH1>
        <StyledH2>{t("buy.paragraph")}</StyledH2>
      </StyledWrapperBreaker>
      <StyledMargin>
        <StyledH1>{t("buy.online")}</StyledH1>
        <List list={online} label={t("buy.buy")} online />

        <StyledH1>{t("buy.stationary")}</StyledH1>
        <List list={offline} offline />
        <Button to={"/"} label={t("buy.back")} />
      </StyledMargin>
    </StyledWrapper>
  )
}

export default BuyMobile

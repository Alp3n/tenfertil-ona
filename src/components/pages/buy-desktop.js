import React from "react"
import styled from "styled-components"
import List from "../list/list"
import { online, offline } from "../../content/data/apteki"
import myTheme from "../../styles/myTheme"
import { useTranslation } from "react-i18next"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 3rem;
`

const StyledWrapperBreaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 5rem 0;
  background-color: ${myTheme.color.background};
  color: #ffffff;
  white-space: pre-wrap;
  margin: 2rem 0;
`

const Styled50 = styled.div`
  width: 55%;
`
const StyledH1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  /* font-family: "Oswald"; */
  margin-bottom: 36px;
`
const StyledH2 = styled.h2`
  font-size: 30px;
`

const BuyDesktop = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <StyledWrapperBreaker>
        <Styled50>
          <StyledH1>{t("buy.heading")}</StyledH1>
          <StyledH2>{t("buy.paragraph")}</StyledH2>
        </Styled50>
      </StyledWrapperBreaker>
      <Styled50>
        <StyledH1>{t("buy.online")}</StyledH1>
        <List list={online} label={t("buy.buy")} online />
      </Styled50>
      <Styled50>
        <StyledH1>{t("buy.stationary")}</StyledH1>
        <List list={offline} offline />
      </Styled50>
    </StyledWrapper>
  )
}

export default BuyDesktop

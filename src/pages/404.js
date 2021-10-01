import React from "react"

import Layout from "../components/layout-desktop"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const StyledWrapper = styled.div`
  margin: 100px 50%;
  width: 50%;
  align-self: flex-start;
`

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <StyledWrapper>
        <h1>{t("notFound.title")}</h1>
        <p>{t("notFound.paragraph")}</p>
      </StyledWrapper>
    </Layout>
  )
}

export default NotFoundPage

import React from "react"
import { useMediaQuery } from "react-responsive"
import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import BuyDesktop from "../components/pages/buy-desktop"
import BuyMobile from "../components/pages/buy-mobile"

import SEO from "../components/seo"
import "../i18n"

const SecondPage = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Kup TENfertil ON" />
      {isBigScreen && (
        <LayoutDesktop>
          <BuyDesktop />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && (
        <LayoutMobile>
          <BuyMobile />
        </LayoutMobile>
      )}
    </>
  )
}

export default SecondPage

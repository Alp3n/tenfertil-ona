import React from "react"

import CirclesMobile from "./circles-mobile"

import S1weight from "../../images/svg/s1weight.svg"
import S2apple from "../../images/svg/s2apple.svg"
import S3rope from "../../images/svg/s3rope.svg"
import S4body from "../../images/svg/s4body.svg"
import S5drugs from "../../images/svg/s5drugs.svg"

const TipsMobile = ({ list }) => {
  return (
    <>
      <CirclesMobile
        key={list[0].header}
        header={list[0].header}
        image={<S1weight />}
        text={list[0].text}
      />
      <CirclesMobile
        key={list[1].header}
        header={list[1].header}
        image={<S2apple />}
        text={list[1].text}
      />
      <CirclesMobile
        key={list[2].header}
        header={list[2].header}
        image={<S3rope />}
        text={list[2].text}
      />
      <CirclesMobile
        key={list[3].header}
        header={list[3].header}
        image={<S4body />}
        text={list[3].text}
      />
      <CirclesMobile
        key={list[4].header}
        header={list[4].header}
        image={<S5drugs />}
        text={list[4].text}
      />
    </>
  )
}

export default TipsMobile

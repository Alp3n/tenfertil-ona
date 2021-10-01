import React from "react"
import styled from "styled-components"
import Circles from "./circles"
import myTheme from "../../styles/myTheme"

import S1weight from "../../images/svg/s1weight.svg"
import S2apple from "../../images/svg/s2apple.svg"
import S3rope from "../../images/svg/s3rope.svg"
import S4body from "../../images/svg/s4body.svg"
import S5drugs from "../../images/svg/s5drugs.svg"

const StyledWrapper = styled.div`
  padding-left: 3rem;
  border-left: 1px solid ${myTheme.color.button};
`

const Tips = ({ list }) => {
  return (
    <StyledWrapper>
      <Circles
        key={list[0].header}
        header={list[0].header}
        image={<S1weight />}
        text={list[0].text}
      />
      <Circles
        key={list[1].header}
        header={list[1].header}
        image={<S2apple />}
        text={list[1].text}
      />
      <Circles
        key={list[2].header}
        header={list[2].header}
        image={<S3rope />}
        text={list[2].text}
      />
      <Circles
        key={list[3].header}
        header={list[3].header}
        image={<S4body />}
        text={list[3].text}
      />
      <Circles
        key={list[4].header}
        header={list[4].header}
        image={<S5drugs />}
        text={list[4].text}
      />
      {/* list.map(item => (
        <Circles
          key={item.header}
          header={item.header}
          image={item.image}
          text={item.text}
        />
      )) */}
    </StyledWrapper>
  )
}

export default Tips

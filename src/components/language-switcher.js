import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;

  @media only screen and (max-width: 1200px) {
    padding: 0;
    margin-left: 20px;
  }
`

const StyledSelect = styled.select`
  border: none;
  background-color: ${props => props.desktop && "transparent"};
  text-transform: uppercase;
  font-size: 20px;
  color: #151070;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23151070'><polygon points='0,0 100,0 50,50'/></svg>")
    no-repeat;
  background-size: 12px;
  background-position: 100% 60%;
  background-repeat: no-repeat;
  background-color: transparent;
`

const StyledOption = styled.option`
  text-transform: uppercase;
  color: #000;
`

const LanguageSwitcher = ({ desktop }) => {
  const { i18n } = useTranslation()
  const languages = [
    { code: "pl", label: "PL" },
    { code: "en", label: "EN" },
    { code: "vn", label: "VN" },
  ]

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <Wrapper>
      <StyledSelect
        desktop={desktop}
        name="languages"
        onChange={event => handleChangeLanguage(event.target.value)}
      >
        {languages.map(lang => (
          <StyledOption key={lang.code} value={lang.code}>
            {lang.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </Wrapper>
  )
}

export default LanguageSwitcher

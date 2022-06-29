import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { Text, StyledLogo } from "./styles";

function Logo() {
  return (
    <StyledLogo to="/">
      <LogoImage />
      <Text className="logo__text">Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;

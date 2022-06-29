import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: 100px;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  position: relative;
  height: ${(props) => props.theme.footerHeight};
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
`;

export const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  color: ${(props) => props.theme.colorBlackForText};
  background-color: ${(props) => props.theme.colorForLightBackground};
  padding: 8px 12px;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSize};
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
`;

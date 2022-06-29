import styled from "styled-components";
import { Ul, Li, Section } from "/src/components/styled";
import starsImage from "/src/assets/stars-image.svg";
import starsLeft from "/src/assets/stars-left.svg";
import starsRight from "/src/assets/stars-right.svg";

export const StyledStarList = styled(Section)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 100px;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-bottom: 80px;
  padding-left: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorForDarkBackground};
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 449px 304px;
  background-position: left bottom;
  background-image: url(${starsImage});

  &::before {
    position: absolute;
    top: 36px;
    left: 0;
    width: 213px;
    height: 170px;
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${starsLeft});
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 158px;
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${starsRight});
  }
`;

export const StarList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const StarItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;

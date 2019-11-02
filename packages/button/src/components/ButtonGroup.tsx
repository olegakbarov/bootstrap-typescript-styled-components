import styled, { css } from "styled-components";
import { Div } from "@bootstrap-styled-components/base";
import { theme, getStyle } from "@bootstrap-styled-components/config";
import { Props } from "../types";

const size = (props: Props) => {
  const { theme, lg, sm } = props;
  if (lg) {
    return css`
      padding: ${getStyle(theme, "buttonGroup", "padding", "lg")};
      font-size: ${getStyle(theme, "buttonGroup", "fontSize", "lg")};
      line-height: 1.5;
    `;
  } else if (sm) {
    return css`
      padding: ${getStyle(theme, "buttonGroup", "padding", "sm")};
      font-size: ${getStyle(theme, "buttonGroup", "fontSize", "sm")};
      line-height: 1.5;
    `;
  }

  return css`
    padding: ${getStyle(theme, "buttonGroup", "padding", "default")};
    font-size: ${getStyle(theme, "buttonGroup", "fontSize", "default")};
    line-height: 1.5;
  `;
};

const vertical = (props: Props) => {
  if (props.vertical) {
    return css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      & > button {
        width: 100%;
        &:not(:last-child) {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
        &:not(:first-child) {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
    `;
  }

  return css`
    & > button {
      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  `;
};

const ButtonGroup = styled(Div)`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  & > button {
    line-height: 1.5;
    position: relative;
    flex: 0 1 auto;
    &:hover {
      z-index: 1;
    }
    ${props => size(props)};
  }
  ${props => vertical(props)};
`;

ButtonGroup.defaultProps = {
  theme
};

export { ButtonGroup };

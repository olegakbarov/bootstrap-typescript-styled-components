import styled, {
  css,
  StyledComponent,
  StyledComponentBase
} from "styled-components";
import {
  Utilities,
  A,
  Button as BaseButton
} from "@bootstrap-styled-components/base";

import {
  theme,
  Theme,
  getColor,
  getStyle,
  getBreakpointSize,
  ButtonProps as Props
} from "@bootstrap-styled-components/config";

const boxShadow = (props: Props) =>
  css`
    box-shadow: 0 0 0 0.2rem ${getColor(props, "button", "boxShadow")};
  `;

const padding = (props: Props) => {
  const { theme, split, sm, lg } = props;
  if (split) {
    if (sm) {
      return css`
        padding: 0;
        padding-right: ${getStyle(theme, "button", "padding", "splitSmRight")};
        padding-left: ${getStyle(theme, "button", "padding", "splitSmLeft")};
        &::after {
          margin-left: 0;
        }
      `;
    } else if (lg) {
      return css`
        padding: 0;
        padding-right: ${getStyle(theme, "button", "padding", "splitLgRight")};
        padding-left: ${getStyle(theme, "button", "padding", "splitLgLeft")};
        &::after {
          margin-left: 0;
        }
      `;
    }

    return css`
      padding: 0;
      padding-right: ${getStyle(
        theme,
        "button",
        "padding",
        "splitDefaultRight"
      )};
      padding-left: ${getStyle(theme, "button", "padding", "splitDefaultLeft")};
      &::after {
        margin-left: 0;
      }
    `;
  } else if (props.lg) {
    return css`
      padding: ${getStyle(theme, "button", "padding", "lg")};
    `;
  } else if (props.sm) {
    return css`
      padding: ${getStyle(theme, "button", "padding", "sm")};
    `;
  }

  return css`
    padding: ${getStyle(theme, "button", "padding", "default")};
  `;
};

const block = (props: Props) => {
  const { block, theme } = props;
  if (block) {
    return css`
      display: block;
      width: 100%;
      & + & {
        margin-top: ${getStyle(theme, "button", "margin", "blockTop")};
      }
    `;
  }

  return css`
    display: inline-block;
  `;
};

const fontSize = (props: Props) => {
  if (props.lg) {
    return css`
      font-size: ${getStyle(theme, "button", "fontSize", "lg")};
    `;
  } else if (props.sm) {
    return css`
      font-size: ${getStyle(theme, "button", "fontSize", "sm")};
    `;
  }

  return css`
    font-size: ${getStyle(theme, "button", "fontSize", "default")};
  `;
};

const dropdownToggle = (props: Props) =>
  props.dropdownToggle &&
  css`
    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: ${getStyle(
        props.theme,
        "button",
        "margin",
        "dropDownToggleLeft"
      )};
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
    &:empty::after {
      margin-left: 0;
    }
    &::after {
      margin-left: 0.255em;
    }
  `;

const disabled = (props: Props) =>
  props.disabled &&
  css`
    opacity: 0.65;
  `;

const border = (props: Props) => {
  // if (props.active) {
  //   return css`
  //     border: ${getBorder(props, "button", "default")}
  //       ${getColor(props, "button", "borderColorActive")};
  //   `;
  // } else if (props.disabled) {
  //   return css`
  //     border: ${getBorder(props, "button", "default")}
  //       ${getColor(props, "button", "borderColorDisabled")};
  //   `;
  // }

  return css`
    border: 1px solid ${getColor(props, "button", "borderColor")};
    ${!props.outline &&
      css`
        &:focus,
        &:hover {
          border: 1px solid
            ${getColor(props, "button", "borderColorHoverFocus")};
        }
      `}
  `;
};

const backgroundColor = (props: Props) => {
  if (props.active) {
    return css`
      background-image: none;
      background-color: ${getColor(props, "button", "backgroundColorActive")};
    `;
  } else if (props.outline) {
    return css`
      background-image: none;
      background-color: transparent;
      &:hover {
        background-color: ${props.disabled
          ? "transparent"
          : getColor(props, "button", "backgroundColor")};
      }
    `;
  } else if (props.disabled) {
    return css`
      background-image: none;
      background-color: ${getColor(props, "button", "backgroundColorDisabled")};
    `;
  }

  return css`
    background-color: ${getColor(props, "button", "backgroundColor")};
    &:focus,
    &:hover {
      background-color: ${getColor(
        props,
        "button",
        "backgroundColorHoverFocus"
      )};
    }
  `;
};

const borderRadius = (props: Props) => {
  const { pill, theme, sm, lg, noRadius } = props;
  if (pill) {
    return css`
      border-radius: ${getStyle(theme, "button", "borderRadius", "pill")};
    `;
  } else if (noRadius) {
    return css`
      border-radius: ${getStyle(theme, "button", "borderRadius", "noRadius")};
    `;
  } else if (sm) {
    return css`
      border-radius: ${getStyle(theme, "button", "borderRadius", "sm")};
    `;
  } else if (lg) {
    return css`
      border-radius: ${getStyle(theme, "button", "borderRadius", "lg")};
    `;
  }

  return css`
    border-radius: ${getStyle(theme, "button", "borderRadius", "default")};
  `;
};

const buttonToggler = (props: Props) =>
  css`
    color: ${getColor(props, "button", "toggleColor")};
    border-color: ${getColor(props, "button", "toggleBorderColor")};
    &:hover,
    &:focus {
      color: ${getColor(props, "button", "toggleColor")};
      border-color: ${getColor(props, "button", "toggleBorderColor")};
    }
  `;

const buttonToggleCollapse = (props: Props) => {
  if (
    (props.expandSm || props.expandMd || props.expandLg || props.expandXl) &&
    props.toggleCollapse
  ) {
    /* TODO: looks like error */
    /* font-size: ${fontSize(props).toggle}; */
    return css`
      display: none;
      @media (max-width: ${getBreakpointSize(props)}) {
        display: block;
        ${buttonToggler};
      }
    `;
  }

  return "";
};

const color = (props: Props) => {
  if (props.outline) {
    if (props.disabled) {
      return css`
        color: ${getColor(props, "button", "colorOutline")};
      `;
    }

    return css`
      color: ${getColor(props, "button", "colorOutline")};
      &:hover {
        color: ${getColor(props, "button", "colorOutlineHover")};
      }
    `;
  }

  return css`
    color: ${getColor(props, "button", "color")};
  `;
};

const cursor = (props: Props) =>
  !props.disabled &&
  css`
    cursor: pointer;
  `;

const buttonStyle = (props: Props) => css`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: 0;
    ${boxShadow};
  }
  &:hover,
  &:focus {
    text-decoration: none;
    ${border(props)};
    ${backgroundColor(props)};
    ${color(props)};
    ${cursor(props)};
  }
  ${border(props)};
  ${backgroundColor(props)};
  ${borderRadius(props)};
  ${block(props)};
  ${dropdownToggle(props)};
  ${buttonToggleCollapse(props)};
  ${disabled(props)};
  ${fontSize(props)};
  ${color(props)};
  ${padding(props)};
`;

const Button = styled<StyledComponentBase<"button", any, {}, never>>(
  BaseButton
)`
  ${(props: Props) => buttonStyle(props)};
`;

Button.defaultProps = {
  theme
};

// TODO add:
// ${Utilities}
const LinkButton = styled<StyledComponentBase<"a", any, {}, never>>(A)`
  text-decoration: none;
  ${(props: Props) => buttonStyle(props)};
`;

LinkButton.defaultProps = {
  theme
};

export { Button, LinkButton };

import * as React from "react";
import styled, { css } from "styled-components";
import { Input, Textarea, Select } from "@typestrap/base";
import {
  theme,
  getColor,
  getStyle,
  getConcreteBreakpointSize,
  FormControlProps as Props
} from "@typestrap/config";

const backgroundColor = (props: Props) => {
  if (props.disabled || props.readonly) {
    return css`
      background-color: ${getColor(
        props,
        "formControl",
        "backgroundColorDisabledReadonly"
      )};
      &:focus {
        background-color: ${getColor(
          props,
          "formControl",
          "backgroundColorDisabledReadonly"
        )};
      }
    `;
  }

  return css`
    background-color: ${getColor(props, "formControl", "background")};
    &:focus {
      background-color: ${getColor(props, "formControl", "background")};
    }
  `;
};

const border = (props: Props) => {
  const { theme, valid, invalid } = props;
  if (valid) {
    return css`
      border-color: ${getColor(props, "formControl", "borderValid")};
      &:focus {
        border-color: ${getColor(props, "formControl", "borderValid")};
      }
    `;
  } else if (invalid) {
    return css`
      border-color: ${getColor(props, "formControl", "borderInvalid")};
      &:focus {
        border-color: ${getColor(props, "formControl", "borderInvalid")};
      }
    `;
  }

  return css`
    border: ${getStyle(theme, "formControl", "border", "default")}
      ${getColor(props, "formControl", "border")};
    &:focus {
      border-color: ${getColor(props, "formControl", "border")};
    }
  `;
};

const boxShadow = (props: Props) => {
  const { theme, valid, invalid } = props;
  if (valid) {
    return css`
      &:focus {
        box-shadow: ${getStyle(theme, "formControl", "boxShadow", "default")}
          ${getColor(props, "formControl", "formControlBoxShadowValid")};
      }
    `;
  } else if (invalid) {
    return css`
      &:focus {
        box-shadow: ${getStyle(theme, "formControl", "boxShadow", "default")}
          ${getColor(props, "formControl", "formControlBoxShadowInvalid")};
      }
    `;
  }

  return css`
    &:focus {
      box-shadow: 0;
    }
  `;
};

const opacity = (props: Props) => {
  if (props.disabled || props.readonly) {
    return css`
      opacity: 1;
      &:focus {
        opacity: 1;
      }
    `;
  }

  return "";
};

const formControlFormInline = (props: Props) =>
  props.formInline &&
  css`
    @media (min-width: ${getConcreteBreakpointSize(props, "sm")}) {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    }
  `;

const padding = (props: Props) => {
  const { theme, sm, lg } = props;
  if (props.lg) {
    return css`
      padding-right: ${getStyle(theme, "formControl", "padding", "lgRight")};
      padding-left: ${getStyle(theme, "formControl", "padding", "lgLeft")};
      padding: ${getStyle(theme, "formControl", "padding", "lgPadding")};
    `;
  } else if (props.sm) {
    return css`
      padding-right: ${getStyle(theme, "formControl", "padding", "smRight")};
      padding-left: ${getStyle(theme, "formControl", "padding", "smLeft")};
      padding: ${getStyle(theme, "formControl", "padding", "smPadding")};
    `;
  }

  return css`
    padding: ${getStyle(theme, "formControl", "padding", "defaultPadding")};
  `;
};

const fontSize = (props: Props) => {
  const { theme, sm, lg } = props;
  if (lg) {
    return css`
      font-size: ${getStyle(theme, "formControl", "fontSize", "lg")};
    `;
  } else if (sm) {
    return css`
      font-size: ${getStyle(theme, "formControl", "fontSize", "sm")};
    `;
  }

  return css`
    font-size: ${getStyle(theme, "formControl", "fontSize", "default")};
  `;
};

const borderRadius = (props: Props) => {
  const { theme, noRadius, pill, sm, lg } = props;
  if (noRadius) {
    return css`
      border-radius: ${getStyle(
        theme,
        "formControl",
        "borderRadius",
        "noRadius"
      )};
    `;
  } else if (pill) {
    return css`
      border-radius: ${getStyle(theme, "formControl", "borderRadius", "pill")};
    `;
  } else if (lg) {
    return css`
      border-radius: ${getStyle(theme, "formControl", "borderRadius", "lg")};
    `;
  } else if (sm) {
    return css`
      border-radius: ${getStyle(theme, "formControl", "borderRadius", "sm")};
    `;
  }

  return css`
    border-radius: ${getStyle(theme, "formControl", "borderRadius", "default")};
  `;
};

const height = (props: Props) => {
  const { theme, multiple, select, lg, sm } = props;

  if (lg && !multiple && select) {
    return css`
      height: ${getStyle(theme, "formControl", "height", "selectLg")};
    `;
  } else if (sm && !multiple && select) {
    return css`
      height: ${getStyle(theme, "formControl", "height", "selectSm")};
    `;
  } else if (!multiple && select) {
    return css`
      height: ${getStyle(theme, "formControl", "height", "select")};
    `;
  }

  return "";
};

const formControlStyle = () => css`
    display: block;
    width: 100%;
    line-height: 1.5;
    color: ${props => getColor(props, "formControl", "color")};
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    &::-ms-expand {
      background-color: transparent;
      border: 0;
    };
    &:focus {
      color: ${props => getColor(props, "formControl", "color")};
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${props =>
        getColor(props, "formControl", "boxShadowFocus")};
    };
    &::placeholder {
      color: ${props => getColor(props, "formControl", "placeholder")};
      opacity: 1;
    };
    ${(props: Props) => backgroundColor(props)}
    ${(props: Props) => border(props)}
    ${(props: Props) => boxShadow(props)}
    ${(props: Props) => opacity(props)}
    ${(props: Props) => formControlFormInline(props)}
    ${(props: Props) => padding(props)}
    ${(props: Props) => fontSize(props)}
    ${(props: Props) => borderRadius(props)}
    ${(props: Props) => height(props)}
  `;

// TODO ${formControlStyle};
const FormControlInput = styled(Input)``;

// TODO ${formControlStyle};
const FormControlTextarea = styled(Textarea)``;

const FormControlSelect = styled(Select)`
  ${formControlStyle};
  &:focus::-ms-value {
    color: ${(props: Props) => getColor(props, "formControl", "color")};
    background-color: ${props => getColor(props, "formControl", "background")};
  }
`;

const FormControl = (props: Props) => {
  if (props.textarea) {
    return <FormControlTextarea {...props} />;
  } else if (props.select) {
    return <FormControlSelect {...props} />;
  }

  return <FormControlInput {...props} />;
};

FormControl.defaultProps = {
  theme
};

export { FormControl };

import shared from "./shared";
import { Theme, ThemedProps } from "@bootstrap-styled-components/config";
const { colorScheme, globals } = shared;

type ButtonOwnProps =
  | "split"
  | "lg"
  | "sm"
  | "dropdownToggle"
  | "block"
  | "pill"
  | "noRadius"
  | "disabled"
  | "outline"
  | "active"
  | "expandSm"
  | "expandMd"
  | "expandLg"
  | "expandXl"
  | "toggleCollapse";

// ButtonProps ==  "primary", "success" etc and any ButtonOwnProps
export type ButtonProps = ThemedProps<
  {
    [K in keyof Theme["button"]["bscolors"]]: boolean;
  }
> &
  { [k in ButtonOwnProps]: boolean };

const button = {
  bscolors: {
    primary: {
      color: colorScheme.white,
      colorOutline: colorScheme.primary,
      colorOutlineHover: colorScheme.white,
      backgroundColor: colorScheme.primary,
      backgroundColorDisabled: colorScheme.primary,
      backgroundColorHoverFocus: colorScheme.primaryDarker,
      backgroundColorActive: colorScheme.primaryDark,
      borderColor: colorScheme.primary,
      borderColorDisabled: colorScheme.primary,
      borderColorHoverFocus: colorScheme.primaryDark,
      borderColorActive: colorScheme.primaryDark,
      boxShadow: colorScheme.primaryBoxShadow
    },
    secondary: {
      color: colorScheme.white,
      colorOutline: colorScheme.secondary,
      colorOutlineHover: colorScheme.white,
      backgroundColor: colorScheme.secondary,
      backgroundColorDisabled: colorScheme.secondary,
      backgroundColorHoverFocus: colorScheme.secondaryDarker,
      backgroundColorActive: colorScheme.secondary,
      borderColor: colorScheme.secondary,
      borderColorDisabled: colorScheme.secondary,
      borderColorHoverFocus: colorScheme.secondaryDark,
      borderColorActive: colorScheme.secondaryDark,
      boxShadow: colorScheme.secondaryBoxShadow
    },
    success: {
      color: colorScheme.white,
      colorOutline: colorScheme.success,
      colorOutlineHover: colorScheme.white,
      backgroundColor: colorScheme.success,
      backgroundColorDisabled: colorScheme.success,
      backgroundColorHoverFocus: colorScheme.successDarker,
      backgroundColorActive: colorScheme.successDark,
      borderColor: colorScheme.success,
      borderColorDisabled: colorScheme.success,
      borderColorHoverFocus: colorScheme.successDark,
      borderColorActive: colorScheme.successDark,
      boxShadow: colorScheme.successBoxShadow
    },
    danger: {
      color: colorScheme.white,
      colorOutline: colorScheme.danger,
      colorOutlineHover: colorScheme.white,
      backgroundColor: colorScheme.danger,
      backgroundColorDisabled: colorScheme.danger,
      backgroundColorHoverFocus: colorScheme.dangerDarker,
      backgroundColorActive: colorScheme.dangerDark,
      borderColor: colorScheme.danger,
      borderColorDisabled: colorScheme.danger,
      borderColorHoverFocus: colorScheme.dangerDark,
      borderColorActive: colorScheme.dangerDark,
      boxShadow: colorScheme.dangerBoxShadow
    },
    warning: {
      color: colorScheme.darkerDarker,
      colorOutline: colorScheme.warning,
      colorOutlineHover: colorScheme.darkerDarker,
      backgroundColor: colorScheme.warning,
      backgroundColorDisabled: colorScheme.warning,
      backgroundColorHoverFocus: colorScheme.warningDarker,
      backgroundColorActive: colorScheme.warningDark,
      borderColor: colorScheme.warning,
      borderColorDisabled: colorScheme.warning,
      borderColorHoverFocus: colorScheme.warningDark,
      borderColorActive: colorScheme.warningDark,
      boxShadow: colorScheme.warningBoxShadow
    },
    info: {
      color: colorScheme.white,
      colorOutline: colorScheme.info,
      colorOutlineHover: colorScheme.white,
      backgroundColor: colorScheme.info,
      backgroundColorDisabled: colorScheme.info,
      backgroundColorHoverFocus: colorScheme.infoDarker,
      backgroundColorActive: colorScheme.infoDark,
      borderColor: colorScheme.info,
      borderColorDisabled: colorScheme.info,
      borderColorHoverFocus: colorScheme.infoDark,
      borderColorActive: colorScheme.infoDark,
      boxShadow: colorScheme.infoBoxShadow
    },
    light: {
      color: colorScheme.darkerDarker,
      colorOutline: colorScheme.light,
      colorOutlineHover: colorScheme.darkerDarker,
      backgroundColor: colorScheme.light,
      backgroundColorDisabled: colorScheme.light,
      backgroundColorHoverFocus: colorScheme.lightDarker,
      backgroundColorActive: colorScheme.lightDark,
      borderColor: colorScheme.light,
      borderColorDisabled: colorScheme.light,
      borderColorHoverFocus: colorScheme.lightDark,
      borderColorActive: colorScheme.lightDark,
      boxShadow: colorScheme.lightBoxShadow,
      toggleColor: colorScheme.dark50Alpha,
      toggleBorderColor: colorScheme.dark10Alpha,
      toggleColorHoverFous: colorScheme.dark50Alpha,
      toggleBorderColorHoverFous: colorScheme.dark10Alpha
    },
    dark: {
      color: colorScheme.white,
      colorOutline: colorScheme.dark,
      colorOutlineHover: colorScheme.white,
      backgroundColor: colorScheme.dark,
      backgroundColorDisabled: colorScheme.dark,
      backgroundColorHoverFocus: colorScheme.darkDarker,
      backgroundColorActive: colorScheme.darkDark,
      borderColor: colorScheme.dark,
      borderColorDisabled: colorScheme.dark,
      borderColorHoverFocus: colorScheme.darkDark,
      borderColorActive: colorScheme.darkDark,
      boxShadow: colorScheme.darkBoxShadow,
      toggleColor: colorScheme.white50Alpha,
      toggleBorderColor: colorScheme.white10Alpha,
      toggleColorHoverFous: colorScheme.white50Alpha,
      toggleBorderColorHoverFous: colorScheme.white10Alpha
    },
    default: {
      color: colorScheme.white,
      colorOutline: colorScheme.secondary,
      colorOutlineHover: colorScheme.white,
      backgroundColor: colorScheme.secondary,
      backgroundColorDisabled: colorScheme.secondary,
      backgroundColorHoverFocus: colorScheme.secondaryDarker,
      backgroundColorActive: colorScheme.secondary,
      borderColor: colorScheme.secondary,
      borderColorDisabled: colorScheme.secondary,
      borderColorHoverFocus: colorScheme.secondaryDark,
      borderColorActive: colorScheme.secondaryDark,
      boxShadow: colorScheme.secondaryBoxShadow,
      toggleColor: colorScheme.dark50Alpha,
      toggleBorderColor: colorScheme.dark10Alpha,
      toggleColorHoverFous: colorScheme.dark50Alpha,
      toggleBorderColorHoverFous: colorScheme.dark10Alpha
    }
  },
  margin: {
    blockTop: "0.5rem",
    dropDownToggleLeft: "0.255rem"
  },
  padding: {
    sm: "0.25rem 0.5rem",
    lg: "0.5rem 1rem",
    default: "0.375rem 0.75rem",
    splitSmRight: "0.375rem",
    splitSmLeft: "0.375rem",
    splitLgRight: "0.75rem",
    splitLgLeft: "0.75rem",
    splitDefaultRight: "0.5625rem",
    splitDefaultLeft: "0.5625rem"
  },
  fontSize: globals.fontSize,
  border: globals.border,
  borderRadius: globals.borderRadius
};

export { button };

import shared from "./shared";
import { Theme, ThemedProps } from "@typestrap/config";

type FormControlOwnProps =
  | "readonly"
  | "disabled"
  | "valid"
  | "invalid"
  | "formInline"
  | "lg"
  | "sm"
  | "multiple"
  | "select"
  | "textarea"
  | "noRadius"
  | "pill";

export type FormControlProps = ThemedProps<
  {
    [K in keyof Theme["button"]["bscolors"]]: boolean;
  }
> &
  { [k in FormControlOwnProps]: boolean };

const formControl = {
  bscolors: {
    default: {
      color: shared.colorScheme.dark,
      background: shared.colorScheme.white,
      border: shared.colorScheme.darkLighter,
      borderFocus: shared.colorScheme.darkLight,
      boxShadowFocus: shared.colorScheme.darkerBoxShadow,
      placeholder: shared.colorScheme.secondary,
      backgroundColorDisabledReadonly: shared.colorScheme.whiteDark,
      borderValid: shared.colorScheme.success,
      formControlBoxShadowValid: shared.colorScheme.successBoxShadow,
      borderInvalid: shared.colorScheme.danger,
      formControlBoxShadowInvalid: shared.colorScheme.dangerBoxShadow
    }
  },
  borderRadius: shared.globals.borderRadius,
  border: shared.globals.border,
  boxShadow: {
    default: "0 0 0 0.2rem"
  },
  padding: {
    smRight: "0",
    smLeft: "0",
    lgRight: "0",
    lgLeft: "0",
    smPadding: "0.25rem 0.5rem",
    lgPadding: "0.5rem 1rem",
    defaultPadding: "0.375rem 0.75rem"
  },
  fontSize: {
    sm: "0.875rem",
    lg: "1.25rem",
    default: "1rem"
  },
  height: {
    select: "calc(2.25rem + 2px)",
    selectLg: "calc(2.875rem + 2px)",
    selectSm: "calc(1.8125rem + 2px)"
  }
};

export { formControl };

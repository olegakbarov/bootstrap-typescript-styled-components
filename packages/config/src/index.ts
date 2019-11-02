import { theme, colorScheme } from "./theme";
import {
  getColor,
  getStyle,
  getBreakpointSize,
  getConcreteBreakpointSize,
  ThemedProps
} from "./utils";

export type Theme = typeof theme;

import { ButtonProps } from "./theme/button";
import { FormControlProps } from "./theme/formControl";

export {
  theme,
  colorScheme,
  getColor,
  getStyle,
  getBreakpointSize,
  getConcreteBreakpointSize,
  ButtonProps,
  FormControlProps,
  ThemedProps
};

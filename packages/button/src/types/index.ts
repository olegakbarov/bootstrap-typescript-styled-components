import { ThemedStyledProps } from "styled-components";
import { theme } from "@bootstrap-styled-components/config";

interface ButtonProps {
  sm?: boolean;
  lg?: boolean;
  split?: boolean;
  disabled?: boolean;
  active?: boolean;
  toggle?: boolean;
  expandSm?: boolean;
  expandMd?: boolean;
  expandLg?: boolean;
  expandXl?: boolean;
  toggleCollapse?: boolean;
  outline?: boolean;
  dropdownToggle?: boolean;
  pill?: boolean;
  noRadius?: boolean;
  vertical?: boolean;
}

type Theme = typeof theme;

export type Props = ThemedStyledProps<ButtonProps, Theme>;

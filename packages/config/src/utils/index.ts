import { theme } from "../theme";
import { ThemedStyledProps } from "styled-components";

export type Theme = typeof theme;
export type ThemedProps<O extends {}> = ThemedStyledProps<O, Theme>;

type BSColors<Compo extends keyof Theme> = keyof Theme[Compo]["bscolors"];

export function getStyle<
  P extends Theme,
  N extends keyof Theme,
  S extends keyof P[N],
  X extends keyof P[N][S]
>(p: P, n: N, s: S, x: X): P[N][S][X];

export function getStyle<
  P extends Theme,
  N extends keyof Theme,
  S extends keyof P[N],
  X extends keyof P[N][S],
  Y extends keyof P[N][S][X]
>(p: P, n: N, s: S, x: X, y: Y): P[N][S][X][Y];

export function getStyle<
  P extends Theme,
  N extends keyof Theme,
  S extends keyof P[N],
  X extends keyof P[N][S],
  Y extends keyof P[N][S][X],
  Z extends keyof P[N][S][X][Y]
>(p: P, n: N, s: S, x: X, y: Y, z: Z): P[N][S][X][Y][Z];

export function getStyle<
  T extends Theme,
  N extends keyof Theme,
  S extends keyof Theme[N],
  X extends keyof Theme[N][S],
  Y extends keyof Theme[N][S][X],
  Z extends keyof Theme[N][S][X][Y]
>(p: T, name: N, style: S, x: X, y?: Y, z?: Z) {
  if (y && z) {
    return p[name][style][x][y][z];
  } else {
    return y ? p[name][style][x][y] : p[name][style];
  }
}

export function getColor<
  P extends { theme: Theme },
  N extends keyof Theme,
  X extends keyof Theme[N]["bscolors"]["default"]
>(props: P, compo: N, x: X): Theme[N]["bscolors"]["default"][X];

export function getColor<
  P extends { theme: Theme } & { [K in BSColors<N>]?: boolean },
  N extends keyof Theme,
  B extends keyof Theme[N]["bscolors"]
>(props: P, compo: N, style: B) {
  const propsArr = Object.keys(props);
  let bscolor: string | null = null;
  const bscolors = Object.keys(theme[compo]);

  propsArr.forEach((s: string) => {
    if (bscolors.includes(s)) {
      bscolor = s;
    }
  });

  if (bscolor) {
    return getStyle(props.theme, compo, "bscolors", bscolor, style);
  }

  // Default
  return props.theme[compo]["bscolors"]["default"];
}

export const getConcreteBreakpointSize = (props, size) =>
  props.theme["screenSize"][size];

export const getBreakpointSize = props => {
  if (props.sm || props.expandSm) {
    return getConcreteBreakpointSize(props.theme, "sm");
  } else if (props.md || props.expandMd) {
    return getConcreteBreakpointSize(props.theme, "md");
  } else if (props.lg || props.expandLg) {
    return getConcreteBreakpointSize(props.theme, "lg");
  } else if (props.xl || props.expandXl) {
    return getConcreteBreakpointSize(props.theme, "xl");
  }

  return "";
};

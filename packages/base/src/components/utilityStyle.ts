import { css } from "styled-components";
import {
  theme,
  colorScheme,
  getConcreteBreakpointSize
} from "@typestrap/config";

interface Props {
  hidden: boolean;
  theme: typeof theme;
}

/* Constants and helpers */
const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "darker",
  "white",
  "transparent"
];

/* Vertical align --------------------------------------------------------- */
const verticalAlign = (size: string) => css`
  vertical-align: ${(props: Props) => {
    if (props[`text${size}Baseline`]) {
      return "baseline";
    }
    if (props[`text${size}Top`]) {
      return "top";
    }
    if (props[`text${size}Bottom`]) {
      return "bottom";
    }
    if (props[`text${size}TextTop`]) {
      return "text-top";
    }
    if (props[`text${size}TextBottom`]) {
      return "text-bottom";
    }
    return null;
  }};
`;

/* Text ------------------------------------------------------------------- */
const textAlign = (size: string) => css`
  text-align: ${(props: Props) => {
    if (props[`text${size}Justify`]) {
      return "justify";
    }
    if (props[`text${size}Left`]) {
      return "left";
    }
    if (props[`text${size}Right`]) {
      return "right";
    }
    if (props[`text${size}Center`]) {
      return "center";
    }
    return null;
  }};
`;

const textWrap = (size: string) => css`
  white-space: ${(props: Props) => {
    if (props[`text${size}Wrap`]) {
      return "normal";
    }
    if (props[`text${size}NoWrap`]) {
      return "nowrap";
    }
    return null;
  }};
`;

const textTransform = (size: string) => css`
  text-transform: ${(props: Props) => {
    if (props[`text${size}Lowercase`]) {
      return "lowercase";
    }
    if (props[`text${size}Uppercase`]) {
      return "uppercase";
    }
    if (props[`text${size}Capitalize`]) {
      return "capitalize";
    }
    return null;
  }};
`;

const textWeight = (size: string) => css`
  font-weight: ${(props: Props) => {
    if (props[`text${size}WeightBold`]) {
      return "bold";
    }
    if (props[`text${size}WeightBolder`]) {
      return "bolder";
    }
    if (props[`text${size}WeightNormal`]) {
      return "normal";
    }
    if (props[`text${size}WeightLight`]) {
      return "light";
    }
    if (props[`text${size}WeightLighter`]) {
      return "lighter";
    }
    return null;
  }};
`;

const textStyle = (size: string) => css`
  font-style: ${(props: Props) => {
    if (props[`text${size}Italic`]) {
      return "italic";
    }
    return null;
  }};
`;

const textMonospace = (size: string) => css`
  font-family: ${(props: Props) => {
    if (props[`text${size}Monospace`]) {
      return 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace';
    }
    return null;
  }};
`;

const textReset = (size: string) => css`
  color: ${(props: Props) => {
    if (props[`text${size}Reset`]) {
      return "inherit";
    }
    return null;
  }};
`;

const textDecoration = (size: string) => css`
  text-decoration: ${(props: Props) => {
    if (props[`textDecoration${size}None`]) {
      return "none!important";
    }
    return null;
  }};
`;

const textWordBreak = (size: string) => css`
  ${(props: Props) => {
    if (props[`text${size}WordBreak`]) {
      return css`
        word-break: break-word;
        overflow-wrap: break-word;
      `;
    }
    return null;
  }};
`;

const textTruncate = (size: string) => css`
  ${(props: Props) => {
    if (props[`text${size}Truncate`]) {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
    }
    return null;
  }};
`;

/* Sizing ----------------------------------------------------------------- */
const sizing = (size: string) =>
  ["max-", ""].map(m =>
    ["width", "height"].map(a =>
      ["25", "50", "75", "100", "Auto"].map(
        p =>
          css`
            ${(props: Props) =>
              props[`${m.slice(0, 1)}${a[0]}${size}${p}`] &&
              css`
          ${m}${a}: ${p === "Auto" ? "auto" : `${p}%`};
        `}
          `
      )
    )
  );

/* Shadows ---------------------------------------------------------------- */
const shadow = (size: string) => css`
  box-shadow: ${(props: Props) => {
    if (props[`shadow${size}None`]) {
      return "none";
    }
    if (props[`shadow${size}Small`]) {
      return "0 .25rem .5rem rgba(0,0,0,.1)";
    }
    if (props[`shadow${size}`]) {
      return "0 .75rem 1.5rem rgba(0,0,0,.2)";
    }
    if (props[`shadow${size}Large`]) {
      return "0 1.25rem 3.5rem rgba(0,0,0,.25)";
    }
    return null;
  }};
`;

/* Position --------------------------------------------------------------- */
const position = (size: string) => css`
  position: ${(props: Props) => {
    if (props[`position${size}Static`]) {
      return "static";
    }
    if (props[`position${size}Relative`]) {
      return "relative";
    }
    if (props[`position${size}Absolute`]) {
      return "absolute";
    }
    if (props[`position${size}Fixed`]) {
      return "fixed";
    }
    if (props[`position${size}Sticky`]) {
      return "sticky";
    }
    return null;
  }};
`;

/* Overflow --------------------------------------------------------------- */
const overflow = (size: string) => css`
  overflow: ${(props: Props) => {
    if (props[`overflow${size}Auto`]) {
      return "auto";
    }
    if (props[`overflow${size}Hidden`]) {
      return "hidden";
    }
    return null;
  }};
`;

/* Hidden ----------------------------------------------------------------- */
const hidden = () => css`
  ${(props: Props) => {
    if (props.hidden) {
      return css`
        display: none;
      `;
    }
    return null;
  }};
`;

/* Text hide ------------------------------------------------------------- */
const textHide = (size: string) => css`
  ${(props: Props) => {
    if (props[`text${size}Hide`]) {
      return css`
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
      `;
    }
    return null;
  }}
`;

/* Float ----------------------------------------------------------------- */
const float = (size: string) => css`
  float: ${(props: Props) => {
    if (props[`float${size}Right`]) {
      return "right";
    }
    if (props[`float${size}Left`]) {
      return "left";
    }
    if (props[`float${size}None`]) {
      return "none";
    }
    return null;
  }};
`;

/* Colors ---------------------------------------------------------------- */
const textColors = (size: string) => css`
  ${(props: Props) =>
    colors.map(
      color =>
        props[`text${size}${capitalizeFirstLetter(color)}`] &&
        css`
          color: ${colorScheme[color]};
        `
    )};
`;

const backgroundColors = (size: string) => css`
  ${(props: Props) =>
    colors.map(
      color =>
        props[`bg${size}${capitalizeFirstLetter(color)}`] &&
        css`
          background-color: ${colorScheme[color]};
        `
    )};
`;

/* Borders ---------------------------------------------------------------- */
const normalizeBorderValue = (value: string) => {
  if (value === "0") {
    return "0";
  }
  return "1px solid";
};

const border = (size: string, value: string) => {
  const suffix = `${size}${value}`;

  return css`
    border-left: ${(props: Props) =>
      (props[`borderLeft${suffix}`] || props[`border${suffix}`]) &&
      normalizeBorderValue(value)};
    border-right: ${props =>
      (props[`borderRight${suffix}`] || props[`border${suffix}`]) &&
      normalizeBorderValue(value)};
    border-top: ${props =>
      (props[`borderTop${suffix}`] || props[`border${suffix}`]) &&
      normalizeBorderValue(value)};
    border-bottom: ${props =>
      (props[`borderBottom${suffix}`] || props[`border${suffix}`]) &&
      normalizeBorderValue(value)};

    ${(props: Props) =>
      colors.map(
        color =>
          props[`border${size}${capitalizeFirstLetter(color)}`] &&
          css`
            border-color: ${colorScheme[color]};
          `
      )};
  `;
};

const borderColor = (size: string) => css`
  ${(props: Props) =>
    colors.map(
      color =>
        props[`border${size}${capitalizeFirstLetter(color)}`] &&
        css`
          border-color: ${colorScheme[color]};
        `
    )};
`;

const rounded = (size: string) => css`
  border-top-left-radius: ${(props: Props) =>
    props[`roundedTop${size}`] ||
    props[`roundedLeft${size}`] ||
    props[`rounded${size}`]
      ? ".25rem"
      : null};
  border-top-right-radius: ${(props: Props) =>
    props[`roundedTop${size}`] ||
    props[`roundedRight${size}`] ||
    props[`rounded${size}`]
      ? ".25rem"
      : null};
  border-bottom-left-radius: ${(props: Props) =>
    props[`roundedBottom${size}`] ||
    props[`roundedLeft${size}`] ||
    props[`rounded${size}`]
      ? ".25rem"
      : null};
  border-bottom-right-radius: ${(props: Props) =>
    props[`roundedBottom${size}`] ||
    props[`roundedRight${size}`] ||
    props[`rounded${size}`]
      ? ".25rem"
      : null};
`;

const roundedCircle = (size: string) => css`
  border-radius: ${(props: Props) =>
    props[`rounded${size}Circle`] ? "50%" : null};
`;

const roundedPill = (size: string) => css`
  border-radius: ${(props: Props) =>
    props[`rounded${size}Pill`] ? "50rem" : null};
`;

/* Spacing ---------------------------------------------------------------- */
const normalizeSpacingValue = (value, allowAuto = false) => {
  // allowed value
  if (allowAuto && value === "Auto") {
    return "auto";
  }

  // rem value
  return `${value * 0.25}rem`;
};

// Margin
const spacingMargin = (size, value, negative = false) => {
  const suffix = `${size}${negative ? "n" : ""}${value}`;

  const val = negative ? -value : value;

  return css`
    margin-left: ${(props: Props) =>
      (props[`ml${suffix}`] || props[`mx${suffix}`] || props[`m${suffix}`]) &&
      normalizeSpacingValue(val, true)};
    margin-right: ${props =>
      (props[`mr${suffix}`] || props[`mx${suffix}`] || props[`m${suffix}`]) &&
      normalizeSpacingValue(val, true)};
    margin-top: ${props =>
      (props[`mt${suffix}`] || props[`my${suffix}`] || props[`m${suffix}`]) &&
      normalizeSpacingValue(val, true)};
    margin-bottom: ${props =>
      (props[`mb${suffix}`] || props[`my${suffix}`] || props[`m${suffix}`]) &&
      normalizeSpacingValue(val, true)};
  `;
};

// Padding
const spacingPadding = (size: string, value: number) => {
  const suffix = `${size}${value}`;

  return css`
    padding-left: ${(props: Props) =>
      (props[`pl${suffix}`] || props[`px${suffix}`] || props[`p${suffix}`]) &&
      normalizeSpacingValue(value)};
    padding-right: ${props =>
      (props[`pr${suffix}`] || props[`px${suffix}`] || props[`p${suffix}`]) &&
      normalizeSpacingValue(value)};
    padding-top: ${props =>
      (props[`pt${suffix}`] || props[`py${suffix}`] || props[`p${suffix}`]) &&
      normalizeSpacingValue(value)};
    padding-bottom: ${props =>
      (props[`pb${suffix}`] || props[`py${suffix}`] || props[`p${suffix}`]) &&
      normalizeSpacingValue(value)};
  `;
};

/* Flex ------------------------------------------------------------------- */
const flexDirection = (size: string) => css`
  flex-direction: ${(props: Props) =>
    (props[`flex${size}Row`] ? "row" : "") ||
    (props[`flex${size}RowReverse`] ? "row-reverse" : "") ||
    (props[`flex${size}Column`] ? "column" : "") ||
    (props[`flex${size}ColumnReverse`] ? "column-reverse" : "") ||
    null};
`;

const justifyContent = (size: string) => css`
  justify-content: ${(props: Props) =>
    (props[`justifyContent${size}Start`] ? "start" : "") ||
    (props[`justifyContent${size}End`] ? "end" : "") ||
    (props[`justifyContent${size}Center`] ? "center" : "") ||
    (props[`justifyContent${size}SpaceBetween`] ? "space-between" : "") ||
    (props[`justifyContent${size}SpaceAround`] ? "space-around" : "") ||
    (props[`justifyContent${size}SpaceEvenly`] ? "space-evenly" : "") ||
    null};
`;

const alignItems = (size: string) => css`
  align-items: ${(props: Props) =>
    (props[`alignItems${size}Start`] ? "start" : "") ||
    (props[`alignItems${size}End`] ? "end" : "") ||
    (props[`alignItems${size}Center`] ? "center" : "") ||
    (props[`alignItems${size}Baseline`] ? "baseline" : "") ||
    (props[`alignItems${size}Stretch`] ? "stretch" : "") ||
    null};
`;

const alignSelf = (size: string) => css`
  align-self: ${(props: Props) =>
    (props[`alignSelf${size}Start`] ? "start" : "") ||
    (props[`alignSelf${size}End`] ? "end" : "") ||
    (props[`alignSelf${size}Center`] ? "center" : "") ||
    (props[`alignSelf${size}Baseline`] ? "baseline" : "") ||
    (props[`alignSelf${size}Stretch`] ? "stretch" : "") ||
    null};
`;

const alignContent = (size: string) => css`
  align-content: ${(props: Props) =>
    (props[`alignContent${size}Start`] ? "start" : "") ||
    (props[`alignContent${size}End`] ? "end" : "") ||
    (props[`alignContent${size}Center`] ? "center" : "") ||
    (props[`alignContent${size}Baseline`] ? "baseline" : "") ||
    (props[`alignContent${size}Stretch`] ? "stretch" : "") ||
    null};
`;

const flexOrder = (size: string) => css`
  ${(props: Props) =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      order =>
        props[`order${size}${order}`] &&
        css`
          order: ${order};
        `
    )};
`;

const flexGrow = (size: string) => css`
  flex-grow: ${(props: Props) => {
    if (props[`flexGrow${size}`] !== undefined) {
      return "1";
    }
    if (props[`flexGrow${size}0`] !== undefined) {
      return "0";
    }
    return null;
  }};
`;

const flexShrink = (size: string) => css`
  flex-shrink: ${(props: Props) => {
    if (props[`flexShrink${size}`] !== undefined) {
      return "1";
    }
    if (props[`flexShrink${size}0`] !== undefined) {
      return "0";
    }
    return null;
  }};
`;

const flexWrap = (size: string) => css`
  flex-wrap: ${(props: Props) => {
    if (props[`flexWrap${size}`] !== undefined) {
      return "wrap";
    }
    if (props[`flexWrap${size}Reverse`] !== undefined) {
      return "wrap-reverse";
    }
    if (props[`flexNoWrap${size}`] !== undefined) {
      return "nowrap";
    }
    return null;
  }};
`;

/* Visibility ------------------------------------------------------------- */
const visibility = (size: string) => css`
  visibility: ${(props: Props) => {
    if (props[`visible${size}`] !== undefined) {
      return "visible";
    }
    if (props[`invisible${size}`] !== undefined) {
      return "hidden";
    }
    return null;
  }};
`;

/* Resize ----------------------------------------------------------------- */
const resize = (size: string) => css`
  resize: ${(props: Props) => {
    if (props[`resize${size}None`] !== undefined) {
      return "none";
    }
    if (props[`resize${size}Both`] !== undefined) {
      return "both";
    }
    if (props[`resize${size}Vertical`] !== undefined) {
      return "vertical";
    }
    if (props[`resize${size}Horizontal`] !== undefined) {
      return "horizontal";
    }
    return null;
  }};
`;

/* Display ---------------------------------------------------------------- */
const display = (size: string) => css`
  display: ${(props: Props) =>
    (props[`d${size}None`] ? "none" : "") ||
    (props[`d${size}Inline`] ? "inline" : "") ||
    (props[`d${size}InlineBlock`] ? "inline-block" : "") ||
    (props[`d${size}Block`] ? "block" : "") ||
    (props[`d${size}Table`] ? "table" : "") ||
    (props[`d${size}TableCell`] ? "table-cell" : "") ||
    (props[`d${size}TableRow`] ? "table-row" : "") ||
    (props[`d${size}Flex`] ? "flex" : "") ||
    (props[`d${size}InlineFlex`] ? "inline-flex" : "") ||
    null};
`;

/* Clearfix --------------------------------------------------------------- */
const clearfix = (size: string) => css`
  ${(props: Props) =>
    props[`clearfix${size}`] &&
    css`
      display: block;
      content: "";
      clear: both;
    `}
`;

/* Aggregation ------------------------------------------------------------ */
const makeUtilitiesForScreenSize = (size: string) => css<Props>`
  ${display(size)};
  ${sizing(size)};

  ${float(size)};

  ${spacingMargin(size, "Auto")};
  ${() =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      s => css`
        ${spacingMargin(size, s)};
        ${spacingMargin(size, s, true)};
        ${spacingPadding(size, s)};
      `
    )}

  ${textTransform(size)};
  ${textAlign(size)};
  ${textWrap(size)};
  ${textWeight(size)};
  ${textStyle(size)};
  ${textMonospace(size)};
  ${textReset(size)};
  ${textDecoration(size)};
  ${textWordBreak(size)};
  ${textTruncate(size)};
  ${verticalAlign(size)};

  ${flexDirection(size)};
  ${justifyContent(size)};
  ${alignContent(size)};
  ${alignItems(size)};
  ${alignSelf(size)};
  ${flexGrow(size)};
  ${flexShrink(size)};
  ${flexWrap(size)};
  ${flexOrder(size)};

  ${visibility(size)};

  ${border(size, "")};
  ${border(size, "0")};
  ${borderColor(size)};

  ${rounded(size)};
  ${roundedCircle(size)};
  ${roundedPill(size)};

  ${textColors(size)};
  ${backgroundColors(size)};

  ${resize(size)};

  ${clearfix(size)};
  ${textHide(size)};
  ${overflow(size)};
  ${position(size)};
  ${shadow(size)};
`;

export const Utilities = css<Props>`
  ${makeUtilitiesForScreenSize("")};

  ${["Sm", "Md", "Lg", "Xl"].map(
    size => css`
      @media (min-width: ${(props: Props) =>
          getConcreteBreakpointSize(props, size.toLowerCase())}) {
        ${makeUtilitiesForScreenSize(size)};
      }
    `
  )};

  ${hidden()};
`;

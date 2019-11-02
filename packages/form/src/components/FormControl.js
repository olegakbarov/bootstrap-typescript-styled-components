"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("@bootstrap-styled-components/base");
var config_1 = require("@bootstrap-styled-components/config");
var backgroundColor = function (props) {
    if (props.disabled || props.readonly) {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n      &:focus {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ",
            ";\n      &:focus {\n        background-color: ",
            ";\n      }\n    "])), config_1.getColor(props, "formControl", "backgroundColorDisabledReadonly"), config_1.getColor(props, "formControl", "backgroundColorDisabledReadonly"));
    }
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n    &:focus {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    &:focus {\n      background-color: ", ";\n    }\n  "])), config_1.getColor(props, "formControl", "background"), config_1.getColor(props, "formControl", "background"));
};
var border = function (props) {
    var theme = props.theme, valid = props.valid, invalid = props.invalid;
    if (valid) {
        return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      border-color: ", ";\n      &:focus {\n        border-color: ", ";\n      }\n    "], ["\n      border-color: ", ";\n      &:focus {\n        border-color: ", ";\n      }\n    "])), config_1.getColor(props, "formControl", "borderValid"), config_1.getColor(props, "formControl", "borderValid"));
    }
    else if (invalid) {
        return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      border-color: ", ";\n      &:focus {\n        border-color: ", ";\n      }\n    "], ["\n      border-color: ", ";\n      &:focus {\n        border-color: ", ";\n      }\n    "])), config_1.getColor(props, "formControl", "borderInvalid"), config_1.getColor(props, "formControl", "borderInvalid"));
    }
    return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    border: ", "\n      ", ";\n    &:focus {\n      border-color: ", ";\n    }\n  "], ["\n    border: ", "\n      ", ";\n    &:focus {\n      border-color: ", ";\n    }\n  "])), config_1.getStyle(theme, "formControl", "border", "default"), config_1.getColor(props, "formControl", "border"), config_1.getColor(props, "formControl", "border"));
};
var boxShadow = function (props) {
    var theme = props.theme, valid = props.valid, invalid = props.invalid;
    if (valid) {
        return styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      &:focus {\n        box-shadow: ", "\n          ", ";\n      }\n    "], ["\n      &:focus {\n        box-shadow: ", "\n          ", ";\n      }\n    "])), config_1.getStyle(theme, "formControl", "boxShadow", "default"), config_1.getColor(props, "formControl", "formControlBoxShadowValid"));
    }
    else if (invalid) {
        return styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      &:focus {\n        box-shadow: ", "\n          ", ";\n      }\n    "], ["\n      &:focus {\n        box-shadow: ", "\n          ", ";\n      }\n    "])), config_1.getStyle(theme, "formControl", "boxShadow", "default"), config_1.getColor(props, "formControl", "formControlBoxShadowInvalid"));
    }
    return styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    &:focus {\n      box-shadow: 0;\n    }\n  "], ["\n    &:focus {\n      box-shadow: 0;\n    }\n  "])));
};
var opacity = function (props) {
    if (props.disabled || props.readonly) {
        return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      opacity: 1;\n      &:focus {\n        opacity: 1;\n      }\n    "], ["\n      opacity: 1;\n      &:focus {\n        opacity: 1;\n      }\n    "])));
    }
    return "";
};
var formControlFormInline = function (props) {
    return props.formInline && styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    @media (min-width: ", ") {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle;\n    }\n  "], ["\n    @media (min-width: ", ") {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle;\n    }\n  "])), config_1.getConcreteBreakpointSize(props, "sm"));
};
var padding = function (props) {
    var theme = props.theme, sm = props.sm, lg = props.lg;
    if (props.lg) {
        return styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      padding-right: ", ";\n      padding-left: ", ";\n      padding: ", ";\n    "], ["\n      padding-right: ", ";\n      padding-left: ", ";\n      padding: ", ";\n    "])), config_1.getStyle(theme, "formControl", "padding", "lgRight"), config_1.getStyle(theme, "formControl", "padding", "lgLeft"), config_1.getStyle(theme, "formControl", "padding", "lgPadding"));
    }
    else if (props.sm) {
        return styled_components_1.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      padding-right: ", ";\n      padding-left: ", ";\n      padding: ", ";\n    "], ["\n      padding-right: ", ";\n      padding-left: ", ";\n      padding: ", ";\n    "])), config_1.getStyle(theme, "formControl", "padding", "smRight"), config_1.getStyle(theme, "formControl", "padding", "smLeft"), config_1.getStyle(theme, "formControl", "padding", "smPadding"));
    }
    return styled_components_1.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    padding: ", ";\n  "], ["\n    padding: ", ";\n  "])), config_1.getStyle(theme, "formControl", "padding", "defaultPadding"));
};
var fontSize = function (props) {
    var theme = props.theme, sm = props.sm, lg = props.lg;
    if (lg) {
        return styled_components_1.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), config_1.getStyle(theme, "formControl", "fontSize", "lg"));
    }
    else if (sm) {
        return styled_components_1.css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), config_1.getStyle(theme, "formControl", "fontSize", "sm"));
    }
    return styled_components_1.css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    font-size: ", ";\n  "], ["\n    font-size: ", ";\n  "])), config_1.getStyle(theme, "formControl", "fontSize", "default"));
};
var borderRadius = function (props) {
    var theme = props.theme, noRadius = props.noRadius, pill = props.pill, sm = props.sm, lg = props.lg;
    if (noRadius) {
        return styled_components_1.css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ",
            ";\n    "])), config_1.getStyle(theme, "formControl", "borderRadius", "noRadius"));
    }
    else if (pill) {
        return styled_components_1.css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), config_1.getStyle(theme, "formControl", "borderRadius", "pill"));
    }
    else if (lg) {
        return styled_components_1.css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), config_1.getStyle(theme, "formControl", "borderRadius", "lg"));
    }
    else if (sm) {
        return styled_components_1.css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), config_1.getStyle(theme, "formControl", "borderRadius", "sm"));
    }
    return styled_components_1.css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    border-radius: ", ";\n  "], ["\n    border-radius: ", ";\n  "])), config_1.getStyle(theme, "formControl", "borderRadius", "default"));
};
var height = function (props) {
    var theme = props.theme, multiple = props.multiple, select = props.select, lg = props.lg, sm = props.sm;
    if (lg && !multiple && select) {
        return styled_components_1.css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n      height: ", ";\n    "], ["\n      height: ", ";\n    "])), config_1.getStyle(theme, "formControl", "height", "selectLg"));
    }
    else if (sm && !multiple && select) {
        return styled_components_1.css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n      height: ", ";\n    "], ["\n      height: ", ";\n    "])), config_1.getStyle(theme, "formControl", "height", "selectSm"));
    }
    else if (!multiple && select) {
        return styled_components_1.css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n      height: ", ";\n    "], ["\n      height: ", ";\n    "])), config_1.getStyle(theme, "formControl", "height", "select"));
    }
    return "";
};
var formControlStyle = function () { return styled_components_1.css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n    display: block;\n    width: 100%;\n    line-height: 1.5;\n    color: ", ";\n    background-clip: padding-box;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    box-sizing: border-box;\n    &::-ms-expand {\n      background-color: transparent;\n      border: 0;\n    };\n    &:focus {\n      color: ", ";\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem ", ";\n    };\n    &::placeholder {\n      color: ", ";\n      opacity: 1;\n    };\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "], ["\n    display: block;\n    width: 100%;\n    line-height: 1.5;\n    color: ", ";\n    background-clip: padding-box;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    box-sizing: border-box;\n    &::-ms-expand {\n      background-color: transparent;\n      border: 0;\n    };\n    &:focus {\n      color: ", ";\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem ",
    ";\n    };\n    &::placeholder {\n      color: ", ";\n      opacity: 1;\n    };\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "])), function (props) { return config_1.getColor(props, "formControl", "color"); }, function (props) { return config_1.getColor(props, "formControl", "color"); }, function (props) {
    return config_1.getColor(props, "formControl", "boxShadowFocus");
}, function (props) { return config_1.getColor(props, "formControl", "placeholder"); }, function (props) { return backgroundColor(props); }, function (props) { return border(props); }, function (props) { return boxShadow(props); }, function (props) { return opacity(props); }, function (props) { return formControlFormInline(props); }, function (props) { return padding(props); }, function (props) { return fontSize(props); }, function (props) { return borderRadius(props); }, function (props) { return height(props); }); };
var FormControlInput = styled_components_1.default(base_1.Input)(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), formControlStyle);
var FormControlTextarea = styled_components_1.default(base_1.Textarea)(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), formControlStyle);
var FormControlSelect = styled_components_1.default(base_1.Select)(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  ", ";\n  &:focus::-ms-value {\n    color: ", ";\n    background-color: ", ";\n  }\n"], ["\n  ", ";\n  &:focus::-ms-value {\n    color: ", ";\n    background-color: ", ";\n  }\n"])), formControlStyle, function (props) { return config_1.getColor(props, "formControl", "color"); }, function (props) { return config_1.getColor(props, "formControl", "background"); });
var FormControl = function (props) {
    if (props.textarea) {
        return <FormControlTextarea {...props}/>;
    }
    else if (props.select) {
        return <FormControlSelect {...props}/>;
    }
    return <FormControlInput {...props}/>;
};
exports.FormControl = FormControl;
FormControl.defaultProps = {
    theme: config_1.theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28;
//# sourceMappingURL=FormControl.js.map
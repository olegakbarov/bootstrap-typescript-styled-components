# @bootstrap-styled-components/button

> The [bootstrap](https://getbootstrap.com) button component made with [styled-components](https://styled-components.com).

Button component

## Requirements

```sh
- styled-components@^4.1.3
- react@^16.7.0
```

## Installation

```sh
npm install --save @bootstrap-styled-components/button
or
yarn add @bootstrap-styled-components/button
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import {
  Button,
  LinkButton,
  ButtonGroups,
  ButtonToolbar
} from "styled-button-component";

const MyButtonComponent = props => (
  <Button primary outline disabled>
    My Button
  </Button>
);

const MyButtonGroupComponent = props => (
  <ButtonGroup>
    <Button secondary>Left</Button>
    <Button secondary>Middle</Button>
    <Button secondary>Right</Button>
  </ButtonGroup>
);

const MyButtonToolbarComponent = props => (
  <ButtonToolbar>
    <ButtonGroup mr2>
      <LinkButton secondary>1</LinkButton>
      <LinkButton secondary>2</LinkButton>
      <LinkButton secondary>3</LinkButton>
      <LinkButton secondary>4</LinkButton>
    </ButtonGroup>
    <ButtonGroup mr2>
      <LinkButton secondary>5</LinkButton>
      <LinkButton secondary>6</LinkButton>
      <LinkButton secondary>7</LinkButton>
    </ButtonGroup>
    <ButtonGroup>
      <LinkButton secondary>8</LinkButton>
    </ButtonGroup>
  </ButtonToolbar>
);
```

## Props

Props correspond to `Bootstrap` css classes all have same type: `boolean`

- `pill` only on Button, LinkButton
- `noRadius` only on Button, LinkButton
- `vertical` only on ButtonGroup **Type**: boolean
- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `info`
- `light`
- `dark`
- `active`
- `disabled`
- `outline`
- `block`
- `sm`
- `lg`

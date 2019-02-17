# react-jet

Replace redux and react context

[![NPM](https://nodei.co/npm/react-jet.png)](https://nodei.co/npm/react-jet/)

[![install size](https://packagephobia.now.sh/badge?p=react-jet)](https://packagephobia.now.sh/result?p=react-jet) [![dependencies](https://david-dm.org/uxitten/react-jet.svg)](https://david-dm.org/uxitten/react-jet.svg)

<a href="https://www.npmjs.com/package/react-jet">
  <img src="https://img.shields.io/npm/v/react-jet.svg" alt="Version">
</a>

<a href="https://www.npmjs.com/package/react-jet">
  <img src="https://img.shields.io/npm/l/react-jet.svg" alt="License">
</a>

<a href="https://www.npmjs.com/package/react-jet">
  <img src="https://img.shields.io/npm/dm/react-jet.svg" alt="Downloads">
</a>

# install

```npm
npm install react-jet
```

# use

## Initial state

```javascript
import { initial } from 'react-jet';

initial([
  {
    name: 'time',
    defaultValue: 2018
  }
]);
```

## Connect to components

```javascript
import React from 'react';
import { connect } from 'react-jet';

function DisplayTime(props) {
  return <div>{props.time}</div>;
}

export default connect(
  DisplayTime,
  ['time']
);
```

## Change state

```javascript
import { state } from 'react-jet';

state.time = 2019;
```

# react-jet

Replace redux and react context

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

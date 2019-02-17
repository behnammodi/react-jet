import React from 'react';
import { initial, connect, state } from 'react-jet';

initial([
  {
    name: 'time',
    defaultValue: 1
  }
]);

function App(props) {
  const { time } = props;
  return <div>{time}</div>;
}

export default connect(
  App,
  ['time']
);

setInterval(() => (state.time = state.time + 1), 1000);

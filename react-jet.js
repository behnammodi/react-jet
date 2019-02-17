import React from 'react';
import * as jetstate from 'jetstate';
import * as jetemit from 'jetemit';

export const initial = fields =>
  fields.forEach(field =>
    jetstate.init({
      ...field,
      didUpdate: value => {
        jetemit.emit(field.name, value);
        field.didUpdate && field.didUpdate(value);
      }
    })
  );

export const connect = (Component, fields) => {
  return class Connect extends React.Component {
    unsubscribes = [];
    state = fields.reduce(
      (a, b) => ({
        ...a,
        [b]: jetstate.state[b]
      }),
      {}
    );

    componentDidMount = () =>
      fields.forEach(field =>
        this.unsubscribes.push(
          jetemit.on(field, () =>
            this.setState({ [field]: jetstate.state[field] })
          )
        )
      );

    componentWillUnmount = () =>
      this.unsubscribes.forEach(unsubscribe => unsubscribe());

    render = () => <Component {...this.props} {...this.state} />;
  };
};

export const on = jetemit.on;

export const emit = jetemit.emit;

export const init = jetstate.init;

export const state = jetstate.state;

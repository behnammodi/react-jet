import React, { PureComponent } from "react";
import { init as _init, state as _state } from "jetstate";
import { on as _on, emit as _emit} from "jetemit";

export const initial = fields =>
  fields.forEach(field =>
    _init({
      ...field,
      didUpdate: value => {
        field.didUpdate && field.didUpdate(value);
        _emit(field.name, value);
      }
    })
  );

export const connect = (Component, fields) => {
  return class Connect extends PureComponent {
    unsubscribes = [];
    state = fields.reduce(
      (a, b) => ({
        ...a,
        [b]: _state[b]
      }),
      {}
    );
    componentDidMount = () =>
      fields.forEach(field =>
        this.unsubscribes.push(
          _on(field, () => this.setState({ [field]: _state[field] }))
        )
      );

    componentWillUnmount = () =>
      this.unsubscribes.forEach(unsubscribe => unsubscribe());

    render = () => <Component {...this.props} {...this.state} />;
  };
};

export const on = _on;

export const emit = _emit;

export const init = _init;

export const state = _state;

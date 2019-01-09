# react-jet

combine jetstate and jetemit for react

# method

```javascript
/**
 * jetemit
 * add listener
 */
on("year", year => console.log(year));

/**
 * jetemit
 * dispatch to all listener
 */
emit("year", "2019");

/**
 * jetstate
 * initial state key
 */ 

init({
  name: "year",
  defaultValue: "2018",
  shouldUpdate: (prevValue, nextValue) => prevValue !== nextValue,
  willUpdate: (prevValue, nextValue) =>
    console.log("changed year from:", prevValue, " to:", nextValue),
  didUpdate: value => console.log("changed year to", value)
});

/**
 * jetstate
 * change state key
 */ 
state.year = "2019";

/**
 * react-jet
 * initial key in state combine jetemit and jetstate
 */
initial([
  {
    name: "year",
    defaultValue: "2018",
    shouldUpdate: (prevValue, nextValue) => prevValue !== nextValue,
    willUpdate: (prevValue, nextValue) =>
      console.log("changed year from:", prevValue, " to:", nextValue),
    didUpdate: value => console.log("changed year to", value)
  },
  {
    name: "month",
    defaultValue: "12",
    shouldUpdate: (prevValue, nextValue) => prevValue !== nextValue,
    willUpdate: (prevValue, nextValue) =>
      console.log("changed month from:", prevValue, " to:", nextValue),
    didUpdate: value => console.log("changed month to", value)
  }
]);

/**
 * react-jet
 * connect state to react component
 */
connect(
  Comoponent,
  ["year"]
);

```

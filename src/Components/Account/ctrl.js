export function setValue(e, { data_value }) {
  this.props.dispatch({
    type: "SET_ACCOUNT_VALUE",
    key: "active",
    value: data_value
  });
}

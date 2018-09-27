import * as Backend from "./../../backend";

export function setActiveValue(e, { data_value }) {
  this.props.dispatch({
    type: "SET_ACCOUNT_VALUE",
    key: "active",
    value: data_value
  });
}

export function setValue(e, data) {
  this.props.dispatch({
    type: "SET_ACCOUNT_VALUE",
    key: data.data_key,
    value: data.value
  });
}

export function getInitialInfo() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "GET_ACCOUNT_PERSONS",
      payload: Backend.getAllPersonas()
    });
  });
}

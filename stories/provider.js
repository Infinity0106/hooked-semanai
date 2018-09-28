import React from "react";
import { Provider } from "react-redux";
import { Store } from "./../src/store";

export default function ReduxProvider({ story }) {
  return <Provider store={Store}>{story()}</Provider>;
}

import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import "semantic-ui-css/semantic.min.css";
import Index from "./../../src/Components/Login";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";

storiesOf("Login", module)
  .addDecorator(story => <ReduxProvider story={story} />)
  .add("Index view", withNotes(indexMD)(() => <Index />));

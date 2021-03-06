import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import "semantic-ui-css/semantic.min.css";
import Index from "./../../src/Components/ShoppingBag";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";

storiesOf("Shopping bag", module)
  .addDecorator(story => <ReduxProvider story={story} />)
  .add("Index view", withNotes(indexMD)(() => <Index />));

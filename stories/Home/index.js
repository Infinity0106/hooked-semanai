import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import "semantic-ui-css/semantic.min.css";
import { MemoryRouter } from "react-router-dom";
import Index from "./../../src/Components/Home";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";

storiesOf("Home", module)
  .addDecorator(story => (
    <MemoryRouter>
      <ReduxProvider story={story} />
    </MemoryRouter>
  ))
  .add("Index view", withNotes(indexMD)(() => <Index />));

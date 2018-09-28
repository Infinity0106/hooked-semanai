import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { MemoryRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Index from "./../../src/Components/NotFound";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";

storiesOf("Not found", module)
  .addDecorator(story => (
    <MemoryRouter>
      <ReduxProvider story={story} />
    </MemoryRouter>
  ))
  .add("Index view", withNotes(indexMD)(() => <Index />));

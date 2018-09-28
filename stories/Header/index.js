import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import "semantic-ui-css/semantic.min.css";
import { MemoryRouter } from "react-router-dom";
import Index from "./../../src/Components/Header";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";

storiesOf("Header", module)
  .addDecorator(story => (
    <MemoryRouter>
      <ReduxProvider story={story} />
    </MemoryRouter>
  ))
  .add("Index view", withNotes(indexMD)(() => <Index />))
  .add(
    "Index view loggedin",
    withNotes(indexMD)(() => <Index show_login name={"Juancho"} />)
  );

import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import "semantic-ui-css/semantic.min.css";
import moment from "moment";
import { MemoryRouter } from "react-router-dom";
import Index from "./../../src/Components/Events";
import EventDetail from "./../../src/Components/Events/detail";
import EventCard from "./../../src/Components/Events/event";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";
import eventMD from "./event.md";
import detailMD from "./detail.md";

storiesOf("Event", module)
  .addDecorator(story => (
    <MemoryRouter>
      <ReduxProvider story={story} />
    </MemoryRouter>
  ))
  .add("Index view", withNotes(indexMD)(() => <Index />))
  .add(
    "Index view logged in",
    withNotes(indexMD)(() => <Index show_recomendation={true} />)
  )
  .add(
    "Detail of event",
    withNotes(detailMD)(() => (
      <EventDetail
        match={{ params: { id: "97a093aa-cb0f-4602-9c33-03e5276adb96" } }}
      />
    ))
  )
  .add(
    "event card",
    withNotes(eventMD)(() => (
      <EventCard
        key={"12345678900"}
        id={"12345678900"}
        name={"elemento dommy"}
        tags={"Ropa"}
        desc={`aqui va la descripcion ${moment().format("DD/MM/YYYY")}`}
        image={"http://cdn.ocesa.com.mx/1496889383LiveOut_especial.jpg"}
      />
    ))
  );

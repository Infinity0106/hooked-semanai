import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import "semantic-ui-css/semantic.min.css";
import Index from "./../../src/Components/Account";
import WorkInfo from "./../../src/Components/Account/work_info";
import BasicInfo from "./../../src/Components/Account/basic_info";
import AddEvent from "./../../src/Components/Account/add_event";
import AddProduct from "./../../src/Components/Account/add_product";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";
import addEventMD from "./add_event.md";
import addProductMD from "./add_product.md";
import basicInfoMD from "./basic_info.md";
import workInfoMD from "./work_info.md";

storiesOf("Account", module)
  .addDecorator(story => <ReduxProvider story={story} />)
  .add("Index view", withNotes(indexMD)(() => <Index />))
  .add("Add event view", withNotes(addEventMD)(() => <AddEvent />))
  .add("Work information", withNotes(workInfoMD)(() => <WorkInfo />))
  .add("Basic information", withNotes(basicInfoMD)(() => <BasicInfo />))
  .add("Add product", withNotes(addProductMD)(() => <AddProduct />));

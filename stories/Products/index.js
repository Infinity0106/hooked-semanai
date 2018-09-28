import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { MemoryRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Index from "./../../src/Components/Products";
import ProductCard from "./../../src/Components/Products/product";
import ReduxProvider from "./../provider";
import indexMD from "./index.md";
import productCardMD from "./product_card.md";

storiesOf("Productos", module)
  .addDecorator(story => (
    <MemoryRouter>
      <ReduxProvider story={story} />
    </MemoryRouter>
  ))
  .add("Index view", withNotes(indexMD)(() => <Index />))
  .add(
    "Index view logged in",
    withNotes(indexMD)(() => <Index show_recomendation />)
  )
  .add(
    "Product card",
    withNotes(productCardMD)(() => (
      <ProductCard
        key={"1234567890"}
        id={"1234567890"}
        name={"producto dommy"}
        tags={"marca"}
        desc={"esta es la descripcion del prodcuto"}
        image={
          "https://http2.mlstatic.com/tachones-nike-mercurial-victory-vi-df-fg-903609-616-D_NQ_NP_909119-MLM26608868035_012018-F.jpg"
        }
        price={"420"}
      />
    ))
  );

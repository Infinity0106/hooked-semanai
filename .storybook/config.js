import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/Account/index.js");
  require("../stories/Error/index.js");
  require("../stories/Events/index.js");
  // require("../stories/Header/index.js");
  // require("../stories/Home/index.js");
  // require("../stories/Landing/index.js");
  // require("../stories/Login/index.js");
  require("../stories/NotFound/index.js");
  // require("../stories/Products/index.js");
  require("../stories/ShoppingBag/index.js");
  require("../stories/WishList/index.js");
}

configure(loadStories, module);

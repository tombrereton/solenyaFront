import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./Components/App";
import LogClicks from "./Components/App/logging";
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("app")
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./Components/App", () => {
    const NextApp = require("./Components/App").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
//LogClicks("productImageId-1");
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import reducer from "./store/reducer";

// const store = createStore(reducer);

ReactDOM.render(
//   <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
//   </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();

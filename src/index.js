import React from "react";
import ReactDOM from "react-dom";

import { store } from "./store";
import Root from "./Root";

import "./index.css";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

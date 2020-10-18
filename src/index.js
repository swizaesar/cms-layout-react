import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { StoreProvider } from "./Reducers";

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById("root")
);

serviceWorker.register();

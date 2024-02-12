import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { AppContextProvider } from "./context/AppContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <AppContextProvider>
          <Router>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </Router>
        </AppContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import { initialState } from "./reducer";
import reducer from "./reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51LkxLaJYXaCmciwBss98b40kSTa6v6PYsMeSBrQyedqUzuvFirYJZrGaR97uEgmvKoUdAXh9qVr2ptDAHz19XAsw00N9ntnCfz"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={promise}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Elements>
  </React.StrictMode>
);
reportWebVitals();

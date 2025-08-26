import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FilterProvider } from "./context/FilterContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FilterProvider>
      <CartProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </CartProvider>
    </FilterProvider>
  </BrowserRouter>
);

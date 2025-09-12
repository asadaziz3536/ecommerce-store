import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store,persistor} from "./store";
import App from "./App.tsx";

import "./index.css";
import "@/assets/styles/main.css";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

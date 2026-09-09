import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DoctorProvider, AppointmentProvider } from "./contexts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DoctorProvider>
        <AppointmentProvider>
          <App />
        </AppointmentProvider>
      </DoctorProvider>
    </BrowserRouter>
  </StrictMode>,
);

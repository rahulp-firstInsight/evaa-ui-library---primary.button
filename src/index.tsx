import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Box } from "./screens/Box";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Box />
  </StrictMode>,
);

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <RouterProvider router={router} />
  </DarkModeProvider>
);

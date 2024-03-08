import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { Toaster } from "sonner";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <Toaster />
    <RouterProvider router={router} />
  </DarkModeProvider>
);

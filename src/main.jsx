import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/OC_JT_P12_MyPortfolioV2">
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </BrowserRouter>
);

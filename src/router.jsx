import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SophieBluel from "./pages/sophiebluel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projets/sophiebluel",
    element: <SophieBluel />,
  },
  {
    path: "*",
    element: "Impossible de trouver la page",
  },
]);

export default router;

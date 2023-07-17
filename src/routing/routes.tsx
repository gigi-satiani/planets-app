import { createBrowserRouter } from "react-router-dom";
import Header from "../components/header";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <Header /> },
  { path: "/", element: <App /> },
]);

export default router;

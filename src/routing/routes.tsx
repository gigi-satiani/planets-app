import { createBrowserRouter } from "react-router-dom";
import Venus from "../components/2venus/Venus";
import Header from "../components/header";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <Header /> },
  { path: "/", element: <App /> },
]);

export default router;

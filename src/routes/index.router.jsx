import { createBrowserRouter } from "react-router-dom";
import loginRouter from "./login.router";
import layoutRouter from "./layout.router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  loginRouter,
  layoutRouter
]);

export default router;

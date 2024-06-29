import { createBrowserRouter } from "react-router-dom";
import loginRouter from "./login.router";
import layoutRouter from "./layout.router";


const router = createBrowserRouter([
  layoutRouter, 
  loginRouter
]);

export default router;

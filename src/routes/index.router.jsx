import { createBrowserRouter } from "react-router-dom";
import loginRouter from "./login.router";
import homeRouter from "./home.router";
import webSiteAccountsRouter from "./websiteAccounts.router";
import AddWebsiteAccountRouter from "./addWebsiteAccount.router";
import Layout from "../pages/layout/layout";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      homeRouter,
      webSiteAccountsRouter,
      AddWebsiteAccountRouter
    ]
  }, 
  loginRouter
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import loginRouter from "./login.router";
import homeRouter from "./home.router";
import webSiteAccountsRouter from "./websiteAccounts.router";
import addWebsiteAccountRouter from "./addWebsiteAccount.router";
import detailsWebsiteAccountRouter from "./detailsWebsiteAccount.router";
import Layout from "../pages/layout/layout";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      homeRouter,
      webSiteAccountsRouter,
      addWebsiteAccountRouter,
      detailsWebsiteAccountRouter
    ]
  }, 
  loginRouter
]);

export default router;

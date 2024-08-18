import { createBrowserRouter } from "react-router-dom";
import loginRouter from "./login.router";
import homeRouter from "./home.router";
import webSiteAccountsRouter from "./websiteAccounts.router";
import addWebsiteAccountRouter from "./addWebsiteAccount.router";
import detailsWebsiteAccountRouter from "./detailsWebsiteAccount.router";
import cardsRouter from "./cards.router";
import addCardRouter from "./addCard.router";
import detailsCardRouter from "./detailsCard.router";
import passportsRouter from "./passports.router";
import addPassportRouter from "./addPassport.router";
import detailsPassportRouter from "./detailsPassport.router";
import signUpRouter from "./signUp.router";
import Layout from "../pages/layout/layout";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      homeRouter,
      webSiteAccountsRouter,
      addWebsiteAccountRouter,
      detailsWebsiteAccountRouter,
      cardsRouter,
      addCardRouter,
      detailsCardRouter,
      passportsRouter,
      addPassportRouter,
      detailsPassportRouter
    ]
  }, 
  loginRouter,
  signUpRouter
]);

export default router;

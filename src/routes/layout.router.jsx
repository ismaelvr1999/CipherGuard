import Layout from "../pages/layout/layout";
import Home from "../pages/home/home";
import WebsiteAccounts from "../pages/websitesAccounts/websitesAccounts";
const router = {
  path:"/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "/website-accounts",
      element: <WebsiteAccounts />,
    },
    {
      path: "/website-accounts/addweb",
      element: <h1>Hola mundo</h1>,
    }

  ]
};

export default router;

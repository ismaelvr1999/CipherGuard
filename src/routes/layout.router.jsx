import Layout from "../pages/layout/layout";
import Home from "../pages/home/home";
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
      element: <div>Hello world! 2</div>,
    }
  ]
};

export default router;

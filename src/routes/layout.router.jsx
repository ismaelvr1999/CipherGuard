import Layout from "../pages/layout/layout";
const router = {
  path:"/",
  element: <Layout />,
  children: [
    {
      path: "/websites-accounts",
      element: <div>Hello world! 2</div>,
    },
  ]
};

export default router;

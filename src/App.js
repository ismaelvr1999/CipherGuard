import "./App.css";
//import Login from './pages/login/login';

import { RouterProvider } from "react-router-dom";
import router from "./routes/index.router";
function App() {
  return (
  <div className="App">
    <RouterProvider router={router} />
  </div>);
}

export default App;

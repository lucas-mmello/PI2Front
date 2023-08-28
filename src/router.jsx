import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import App from "./App";
import Error from "./pages/Error";
import Private from "./components/Auth/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/private",
    element: (
      <>
        <Private />
      </>
    ), // Use o componente ProtectedRoute para proteger a rota
    children: [
      {
        path: "/private/search", // /protected
        element: <h1>Protected Route Content</h1>,
      },
      {
        path: "/private/post", // /protected
        element: <h1>Protected Route Content</h1>,
      },
    ],
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/error/:errorCode/:errorMessage", // Define um parâmetro de rota ":message"
    element: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;

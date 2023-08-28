import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import App from "./App";
import Error from "./pages/Error";
import Private from "./components/Auth/Private";
import EstudioPrivate from "./components/Auth/Private/EstudioPrivate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Página inicial
        element: <Home />,
      },
      {
        path: "private", // Rota privada
        element: (
          <>
            <Private />
          </>
        ),
        children: [
          {
            path: "search", // Rota de pesquisa
            element: <h1>Protected Route Content</h1>,
          },
          {
            path: "estudioPrivate",
            element: (
              <>
                <EstudioPrivate />
              </>
            ),
            children: [
              {
                path: "post",
                element: (
                  <h1 className="py-4">Protected Estudio Route Content</h1>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/Register", // Rota de registro
    element: <Register />,
  },
  {
    path: "/Login", // Rota de login
    element: <Login />,
  },
  {
    path: "/error/:errorCode/:errorMessage", // Rota de erro
    element: <Error />,
  },
  {
    path: "*", // Qualquer outra rota de erro
    element: <Error />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import App from "./App";
import Error from "./pages/Error";
import Private from "./components/Auth/Private";
import EstudioPrivate from "./components/Auth/Private/EstudioPrivate";
import ProfilePage from "./pages/Estudio/Profile";
import Search from "./pages/Search";
import EstudioSearch from "./pages/Search/EstudioSearch";
import Account from "./pages/Account";
import StylesPage from "./pages/Estudio/StylesPage";

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
            element: <Search />,
          },
          {
            path: "estudio/:id", // Rota de pesquisa
            element: <EstudioSearch />,
          },
          {
            path: "account",
            element: <Account />,
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
                path: "profile",
                element: <ProfilePage />,
              },
              {
                path: "styles",
                element: <StylesPage />,
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

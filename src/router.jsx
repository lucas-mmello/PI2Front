import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import App from "./App";
import Error from "./pages/Error";
import Private from "./components/Auth/Private";
import EstudioPrivate from "./components/Auth/Private/EstudioPrivate";
import ProfilePage from "./pages/Estudio/Profile";
import CreatePost from "./pages/Estudio/Profile/CreatePost";
import EditPost from "./pages/Estudio/Profile/EditPost";
import DeletePost from "./pages/Estudio/Profile/DeletePost";
import Search from "./pages/Search";

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
                path: "profile/createPost",
                element: <CreatePost />,
              },
              {
                path: "profile/editPost/:id",
                element: <EditPost />,
              },
              {
                path: "profile/deletePost/:id",
                element: <DeletePost />,
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

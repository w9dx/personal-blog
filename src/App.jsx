import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticlesListPage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import { articleLoader, articlesLoader } from "./loaders/articles.js";
import ShowCaseListPage from "./pages/showcases/ShowCaseListPage.jsx";
import FlexBoxDemo from "./pages/showcases/flexboxdemo/Index.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/create-account",
        element: <CreateAccountPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/showcases",
        element: <ShowCaseListPage />,
      },
      {
        path: "/showcases/flexboxdemo",
        element: <FlexBoxDemo />,
      },
      {
        path: "/articles",
        element: <ArticleListPage />,
        loader: articlesLoader,
      },
      {
        path: "/articles/:name",
        element: <ArticlePage />,
        loader: articleLoader,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

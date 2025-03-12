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
import FlexBoxDemo from "./pages/showcases/flexboxdemo/index.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";

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
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        children: [
          {
            path: "showcases",
            element: <ShowCaseListPage />,
          },
          {
            path: "showcases/flexboxdemo",
            element: <FlexBoxDemo />,
          },
        ],
      },

      {
        path: "/about/articles",
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

function setTheme(theme) {
  let root = document.documentElement;
  if (theme === "light") {
    root.style.setProperty("--bg-color", "#ECF2FF");
    root.style.setProperty("--text-color", "#2B283A");
    root.style.setProperty("--title-color", "#4A4E74");
  } else if (theme === "dark") {
    root.style.setProperty("--bg-color", "#2B283A");
    root.style.setProperty("--text-color", "#ECF2FF");
    root.style.setProperty("--title-color", "#D5D4D8");
  }
}

const router = createBrowserRouter(routes);

function App() {
  setTheme("light");
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

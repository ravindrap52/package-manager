import App from "./App";

import Packages from "@/pages/Packages";
import Docs from "@/pages/Docs";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import SearchPackages from "@/pages/SearchPackages";
import Stats from "@/pages/Stats";
import Tools from "@/pages/Tools";
import ErrorPage from "@/pages/ErrorPage";

export const routesConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Packages />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "searchPackages",
        element: <SearchPackages />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
    ],
  },
];

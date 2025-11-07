import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";
import { NavLayout } from "./components/NavLayout/NavLayout";

const basename = "/space-tourism-website/";

export const router = createBrowserRouter(
  [
    {
      element: <NavLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/destination", element: <Destination /> },
        { path: "/crew", element: <Crew /> },
        { path: "/technology", element: <Technology /> },
      ],
    },
  ],
  { basename }
);

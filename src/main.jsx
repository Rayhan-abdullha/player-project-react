import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LiveMatch from "./pages/LiveMatch";
import TransferMain from "./pages/singlePlayerDtails";
import NotFound from "./components/notfound/NotFound";
import News from "./pages/news/news";
import NewsDetails from "./pages/newDetails/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:newsId",
    element: <NewsDetails />,
  },
  {
    path: "/player/:playerId",
    element: <TransferMain />,
  },
  {
    path: "/livematch",
    element: <LiveMatch />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

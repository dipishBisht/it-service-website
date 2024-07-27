import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Game from "./pages/Game";
import AppDev from "./pages/AppDev";
import DigitalMarketing from "./pages/DigitalMarketing";
import GraphicDesigning from "./pages/GraphicDesigning";
import ErrorPage from "./pages/ErrorPage";
import Offline from "./pages/Offline";
import useStatus from "./hooks/useStatus";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services/web", element: <Web /> },
      { path: "/services/game", element: <Game /> },
      { path: "/services/app", element: <AppDev /> },
      { path: "/services/digital", element: <DigitalMarketing /> },
      { path: "/services/graphic", element: <GraphicDesigning /> },
    ],
  },
]);

const Main = () => {
  const curStatus = useStatus();

  return curStatus === false ? (
    <Offline />
  ) : (
    <RouterProvider router={router} />
  );
};

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found');
}

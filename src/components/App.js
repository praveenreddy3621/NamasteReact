import React, { lazy, Suspense } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom";
import Error from "./Error";
import Contact from "./Contact";
import RestaurentMenu from "./RestaurentMenu";
import Profile from "./ProfileClass";
import Shimmer from "./Shimmer";
// import InstaMart from "./InstaMart";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const Instamart = lazy(() => import("./InstaMart"));
//Upon on demand loading --> up on render --> react will suspened

const About = lazy(() => import("./About"))
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading</h1>}><About /></Suspense>,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

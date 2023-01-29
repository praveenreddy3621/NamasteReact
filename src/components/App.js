import React from "react";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import ReactDOM from "react-dom"
import Error from "./Error"
import Contact from './Contact'
import RestaurentMenu from "./RestaurentMenu";
import Profile from "./ProfileClass";


const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/about',
        element: <About/>,
        children: [
          {
            path: 'profile',
            element: <Profile/>
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/restaurent/:id',
        element: <RestaurentMenu/>
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);

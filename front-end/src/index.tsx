import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { StateContext, stateContextValues } from "./store/StateContext";
import Login from './Login';
import SignUp from './Signup';
import Home from './Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const RootRoutes = createBrowserRouter([
  {
    children: [
      {
        path: "/*",
        element: (
          <Login />
        )
      },
      {
        path: "home",
        element: (
          <Home />
        )
      },
      {
        path: "signup",
        element: (
          <SignUp />
        ),
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <StateContext.Provider value={stateContextValues}>
    <RouterProvider router={RootRoutes} />
    </StateContext.Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { List, Add, Overview, Profile, Details, Signup } from "./pages";
import './index.css';
import swDev from './swDev';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "list",
        element: <List />,
      },
      {
        path: "list/:id",
        element: <Details />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

swDev()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

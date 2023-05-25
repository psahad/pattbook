import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import App from "./App";
import {List, Add, Overview, Profile, Details, Signup, Login} from "./pages";
import "./index.css";
import swDev from "./swDev";
import AuthContextProvider from "./contexts/AuthContext";
import AppContextProvider from "./contexts/AppContext";

const protectedRouter = createBrowserRouter([
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
    path: "*",
    element: <Navigate replace to="/" />,
  },
]);

const publicRouter = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate replace to="/login" />,
  },
]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const isAuthenticated = JSON.parse(localStorage.getItem("access_token")) || null;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <RouterProvider
          router={isAuthenticated ? protectedRouter : publicRouter}
        />
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

swDev();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

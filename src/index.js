import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import CV from './components/CV';
import Portfolio from './components/Portfolio';
import Mystery from './components/Mystery';
import Lorem from './components/Lorem';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cv",
    element: <CV />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/mystery",
    element: <Mystery />
  },
  {
    path: "/lorem",
    element: <Lorem />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

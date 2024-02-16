import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import CafeProject from './component/99cafe.jsx';
import MamikoProject from './component/Mamiko.jsx';


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/99-cafe",
    element: <CafeProject/>,
  },
  {
    path: "/project/mamiko",
    element: <MamikoProject/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

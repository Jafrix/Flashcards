import { useState } from 'react'

import './App.css'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Layout';
import RegPage from '../pages/RegPage';
import LoginPage from '../pages/LoginPage';


function App() {
  const [user, setUser] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} />,
      children: [
{
      path: "/theme1",
      element: <div></div>,
    },
    {
      path: "/theme2",
      element: <div></div>,
    },
    
    {
      path: "/reg",
      element: <RegPage setUser={setUser} />,
    },
    {
      path: "/login",
      element: <LoginPage setUser={setUser} />,
    },
      ],
    },
    
  ]);
  return (
    
      <RouterProvider router={router} />
   
  )
}

export default App

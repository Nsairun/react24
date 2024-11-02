import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './orgs/ErrorPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RegistrationLogin from './orgs/RegistrationLogin.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <ErrorPage />
  },
  {
    path: "RegistrationLogin", element: <RegistrationLogin />
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

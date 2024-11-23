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
import RegistrationLogin from './orgs/RegistrationLogin.jsx';
import UserDashboard from './orgs/UserDashboard.jsx'
import { UserProvider } from './atoms/UserContext.jsx'

const user = {
  role: 'client', // or 'admin'
  profilePic: 'https://via.placeholder.com/80',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  address: '123 Logistics St, City, Country',
  shipmentStatus: {
    status: 'Pending',
    statusText: 'Your shipment is on the way',
  },
}

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <ErrorPage />
  },
  {
    path: "RegistrationLogin", element: <RegistrationLogin />
  },
  {
    path: "UserDashboard", element: <UserDashboard />
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider value={user}>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)

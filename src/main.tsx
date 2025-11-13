import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Help from './pages/Help'
import ClaimStart from './pages/claims/ClaimStart'
import ClaimTrack from './pages/claims/ClaimTrack'

import PortalLayout from './pages/portal/PortalLayout'
import Dashboard from './pages/portal/Dashboard'
import Policies from './pages/portal/Policies'
import PolicyDetail from './pages/portal/PolicyDetail'
import Documents from './pages/portal/Documents'
import Billing from './pages/portal/Billing'
import Profile from './pages/portal/Profile'

import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminHelp from './pages/admin/AdminHelp'
import AdminForms from './pages/admin/AdminForms'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:slug', element: <ProductDetail /> },
      { path: 'help', element: <Help /> },
      { path: 'claims/start', element: <ClaimStart /> },
      { path: 'claims/track', element: <ClaimTrack /> },
      {
        path: '',
        element: <PortalLayout />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'policies', element: <Policies /> },
          { path: 'policies/:policyId', element: <PolicyDetail /> },
          { path: 'documents', element: <Documents /> },
          { path: 'billing', element: <Billing /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'content/help', element: <AdminHelp /> },
          { path: 'content/forms', element: <AdminForms /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Dashboard from '@/pages/Dashboard'
import Contacts from '@/pages/Contacts'
import Companies from '@/pages/Companies'
import Deals from '@/pages/Deals'
import Tasks from '@/pages/Tasks'
import Reports from '@/pages/Reports'
import Billing from '@/pages/Billing'
import Settings from '@/pages/Settings'
import Docs from '@/pages/Docs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'contacts',  element: <Contacts /> },
      { path: 'companies', element: <Companies /> },
      { path: 'deals',     element: <Deals /> },
      { path: 'tasks',     element: <Tasks /> },
      { path: 'reports',   element: <Reports /> },
      { path: 'billing',   element: <Billing /> },
      { path: 'settings',  element: <Settings /> },
      { path: 'docs',      element: <Docs /> },
    ],
  },
])

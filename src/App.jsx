import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Contacts  from './pages/Contacts';
import Companies from './pages/Companies';
import Deals     from './pages/Deals';
import Tasks     from './pages/Tasks';
import Reports   from './pages/Reports';
import Billing   from './pages/Billing';
import Settings  from './pages/Settings';
import Docs      from './pages/Docs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contacts"  element={<Contacts />}  />
          <Route path="companies" element={<Companies />} />
          <Route path="deals"     element={<Deals />}     />
          <Route path="tasks"     element={<Tasks />}     />
          <Route path="reports"   element={<Reports />}   />
          <Route path="billing"   element={<Billing />}   />
          <Route path="settings"  element={<Settings />}  />
          <Route path="docs"      element={<Docs />}      />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

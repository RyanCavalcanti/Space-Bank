import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AsideDashboard from './AsideDashboard/AsideDashboard';
import LoginForm from '../../components/auth/LoginForm';

function Dashboard() {
  const isAuthenticated = !!localStorage.getItem('userId');

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('userId');
    if (!userIdFromStorage) {
      <Navigate to={'/login'} />
    }
  }, []);

  return (
    <section>
      <Routes>
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <AsideDashboard /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginForm onLogin={() => {}} />
          }
        />
      </Routes>
    </section>
  );
}

export default Dashboard;

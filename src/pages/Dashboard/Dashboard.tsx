import { Routes, Route, Navigate } from 'react-router-dom';
import AsideDashboard from './AsideDashboard/AsideDashboard';

function Dashboard() {
  const isAuthenticated = !!localStorage.getItem('userId');

  return (
    <section>
      {isAuthenticated ? (
        <>
          <Routes>
            <Route path="/dashboard" element={<AsideDashboard />} />
          </Routes>
          <AsideDashboard />
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </section>
  );
}

export default Dashboard;

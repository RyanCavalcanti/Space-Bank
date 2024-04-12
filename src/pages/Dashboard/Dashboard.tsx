import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AsideDashboard from './AsideDashboard/AsideDashboard';

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
      {isAuthenticated ? (
        <AsideDashboard />
      ) : (
        <Navigate to="/login" />
      )}
    </section>
  );
}

export default Dashboard;

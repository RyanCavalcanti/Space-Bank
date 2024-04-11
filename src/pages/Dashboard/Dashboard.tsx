import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AsideDashboard from './AsideDashboard/AsideDashboard';

function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const loginTime = localStorage.getItem('loginTime');
      if (loginTime) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - parseInt(loginTime, 10);
        const tenMinutesInMilliseconds = 10 * 60 * 1000;
        if (elapsedTime > tenMinutesInMilliseconds) {
          setUserId(null);
          localStorage.removeItem('loginTime');
          localStorage.removeItem('userId');
        } else {
          const userIdFromStorage = localStorage.getItem('userId');
          if (userIdFromStorage) {
            setUserId(userIdFromStorage);
          }
        }
      }
    };

    fetchUserData();
  }, []);

  const isAuthenticated = !!userId;

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

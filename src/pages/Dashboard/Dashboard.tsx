// Dashboard.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AsideDashboard from './AsideDashboard/AsideDashboard';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Corrija o redirecionamento para /login
    }
  }, [navigate]);

  return (
    <section>
      <AsideDashboard />
    </section>
  );
}

export default Dashboard;

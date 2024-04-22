import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxDashboard from './BoxDashboard/BoxDashboard';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <section>
      <BoxDashboard />
    </section>
  );
}

export default Dashboard;

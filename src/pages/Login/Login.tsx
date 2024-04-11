import { useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import NavBar from '../../components/layout/NavBar';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('userId');
    if (userIdFromStorage) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = (userId: string) => {
    localStorage.setItem('userId', userId);
    navigate('/dashboard');
  };

  return (
    <section>
      <NavBar />
      <LoginForm onLogin={handleLogin} />
    </section>
  );
}

export default Login;

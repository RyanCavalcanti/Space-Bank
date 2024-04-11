import { useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import NavBar from '../../components/layout/NavBar';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginTime = localStorage.getItem('loginTime');
    const userIdFromStorage = localStorage.getItem('userId');

    if (!loginTime || !userIdFromStorage) {
      navigate('/login');
      return;
    }

    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - parseInt(loginTime, 10);
    const tenMinutesInMilliseconds = 10 * 60 * 1000;

    if (elapsedTime > tenMinutesInMilliseconds) {
      localStorage.removeItem('loginTime');
      localStorage.removeItem('userId');
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  }, []);

  const handleLogin = (userId: string) => {
    localStorage.setItem('loginTime', new Date().getTime().toString());
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

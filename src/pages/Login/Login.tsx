import LoginForm from '../../components/auth/LoginForm';
import NavBar from '../../components/layout/NavBar';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import { useState } from 'react';
import Paragraph from '../../components/common/Paragraph/Paragraph';
import theme from '../../styles/Theme';

interface Credentials {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const handleLogin = async ({ email, password }: Credentials) => {
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');

      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
      }, 1800000);

    } catch (error) {
      setError('Erro ao efetuar login')
    }
  };
  

  return (
    <section>
      <NavBar />
      <LoginForm onLogin={handleLogin} />
      {error && <Paragraph color={theme.colors.White}>{error}</Paragraph>}
    </section>
  );
}

export default Login;

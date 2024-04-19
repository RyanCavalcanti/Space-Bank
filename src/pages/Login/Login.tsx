import LoginForm from '../../components/auth/LoginForm';
import NavBar from '../../components/layout/NavBar';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';

interface Credentials {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: Credentials) => {
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');

      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
      }, 1800000); // 30 minutos em milissegundos

    } catch (error) {
      console.log('Erro ao efetuar login:', error)
    }
  };
  

  return (
    <section>
      <NavBar />
      <LoginForm onLogin={handleLogin} />
    </section>
  );
}

export default Login;

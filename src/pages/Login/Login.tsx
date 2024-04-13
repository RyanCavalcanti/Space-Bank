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
      localStorage.setItem('token', data.token); // Armazenar o token no localStorage
      navigate('/dashboard'); // Redirecionar para o painel após o login
    } catch (error) {
      console.log('Erro ao efetuar login(login.tsx):', error)
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

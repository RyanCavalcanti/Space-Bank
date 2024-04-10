import LoginForm from "../../components/auth/LoginForm";
import NavBar from "../../components/layout/NavBar";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <section>
      <NavBar />
      <LoginForm onLogin={handleLogin} />
    </section>
  );
}

export default Login;

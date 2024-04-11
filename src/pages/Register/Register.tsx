import RegisterForm from "../../components/auth/RegisterForm";
import NavBar from "../../components/layout/NavBar";
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
    alert("Registro bem-sucedido!");
  };

  return (
    <section>
      <NavBar />
      <RegisterForm onSubmit={handleRegister} />
    </section>
  );
}

export default Register;

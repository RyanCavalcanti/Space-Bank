import { useState } from "react";
import FormInput from "../common/FormInput";
import {
  ContainerFormStyles,
  ErrorText,
  FormStyles,
  LabelFormStyles,
} from "../../styles/FormStyles";
import Button from "../common/Button";
import Title from "../common/Title";

interface LoginFormProps {
  onLogin: (userId: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem(email) || "{}");

    if (!savedUser.id) {
      setError("Usuário não encontrado");
      return;
    }

    if (savedUser.password !== password) {
      setError("E-mail ou senha inválidos");
      return;
    }

    onLogin(savedUser.id);
  };

  return (
    <ContainerFormStyles as="div">
      <Title as="h3" fontWeight={600}>Faça já o seu login</Title>
      <FormStyles onSubmit={handleSubmit}>
        <LabelFormStyles>Informe e-mail:</LabelFormStyles>
        <FormInput
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <LabelFormStyles>Informe sua senha:</LabelFormStyles>
        <FormInput
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <Button variant="tertiary" type="submit">Entrar</Button>
        {error && <ErrorText>{error}</ErrorText>}
      </FormStyles>
    </ContainerFormStyles>
  );
};

export default LoginForm;

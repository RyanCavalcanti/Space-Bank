import React, { useState } from "react";
import FormInput from "../common/FormInput/FormInput";
import {
  ContainerFormStyles,
  ErrorText,
  FormStyles,
  LabelFormStyles,
} from "../../styles/FormStyles";
import Button from "../common/Button/Button";
import Title from "../common/Title/Title";
import { loginUser } from "../../services/api";

interface Credentials {
  email: string;
  password: string;
  firstName: string;
}

interface LoginFormProps {
  onLogin: (credentials: Credentials) => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('firstName', data.firstName); 
      onLogin({ email, password, firstName: data.firstName }); 
    } catch (error) {
      setError('Erro ao tentar fazer login. Tente novamente.');
    }
  };

  return (
    <ContainerFormStyles as="div">
      <Title as="h3" fontWeight={600}>
        Faça já o seu login
      </Title>
      <FormStyles onSubmit={handleSubmit}>
        <LabelFormStyles>Informe e-mail:</LabelFormStyles>
        <FormInput
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          autoComplete="off"
        />
        <LabelFormStyles>Informe sua senha:</LabelFormStyles>
        <FormInput
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          autoComplete="off"
        />
        <Button variant="tertiary" type="submit">
          Entrar
        </Button>
        {error && <ErrorText>{error}</ErrorText>}
      </FormStyles>
    </ContainerFormStyles>
  );
};

export default LoginForm;

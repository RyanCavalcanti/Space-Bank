import React, { useState } from "react";
import FormInput from "../common/FormInput";
import {
  ContainerFormStyles,
  ErrorText,
  FormStyles,
  LabelFormStyles,
} from "../../styles/FormStyles";
import Button from "../common/Button";
import Title from "../common/Title";

interface User {
  id: string;
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin: (userId: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usersString = localStorage.getItem("users");
    if (!usersString) {
      setError("Nenhum usuário cadastrado");
      return;
    }

    const users: { [key: string]: User } = JSON.parse(usersString);

    const foundUser = Object.values(users).find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setError("E-mail ou senha inválidos");
      return;
    }

    onLogin(foundUser.id);
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

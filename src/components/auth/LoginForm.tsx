import React, { useState } from "react";
import FormInput from "../common/FormInput";
import { ContainerFormStyles, ErrorText, FormStyles, LabelFormStyles } from "../../styles/FormStyles";
import Button from "../common/Button";
import Title from "../common/Title";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Verificar credenciais e fazer login
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos!");
      return;
    }

    if (savedEmail === email && savedPassword === password) {
      window.location.href = "/dashboard";
    } else {
      setError("E-mail ou senha inválidos");
    }
  };

  return (
    <ContainerFormStyles as='div'>
      <Title as='h3' fontWeight={600}>Faça já o seu login</Title>
      <FormStyles onSubmit={handleSubmit}>
        <LabelFormStyles>Informe e-mail:</LabelFormStyles>
        <FormInput
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelFormStyles>Informe sua senha:</LabelFormStyles>
        <FormInput
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="tertiary" type="submit">Entrar</Button>
        {error && <ErrorText>{error}</ErrorText>}
      </FormStyles>
    </ContainerFormStyles>
  );
};

export default LoginForm;

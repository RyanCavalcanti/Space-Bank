import React, { useState } from "react";
import FormInput from "../common/FormInput";
import { ContainerFormStyles, ErrorText, FormStyles, LabelFormStyles } from "../../styles/FormStyles";
import Button from "../common/Button";

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
      setError("Please fill out all fields");
      return;
    }

    if (savedEmail === email && savedPassword === password) {
      alert("Login successful");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <ContainerFormStyles as='div'>
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

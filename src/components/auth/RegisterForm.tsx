import React, { useState, useEffect } from "react";
import FormInput from "../common/FormInput";
import {
  ContainerFormStyles,
  ErrorText,
  FormStyles,
  LabelFormStyles,
} from "../../styles/FormStyles";
import Button from "../common/Button";
import Title from "../common/Title";

interface RegisterFormProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    setFirstName(storedFirstName || ""); // Set default to empty string if not found
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const existingUser = localStorage.getItem("email");
    if (existingUser) {
      setError("E-mail já existe! Tente outro.");
      return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    onSubmit({
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <ContainerFormStyles as="div">
      <Title as="h3" fontWeight={600}>
        Cadastre-se gratuitamente!
      </Title>
      <FormStyles onSubmit={handleSubmit}>
        <LabelFormStyles>Informe seu primeiro nome:</LabelFormStyles>
        <FormInput
          type="text"
          placeholder=""
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <LabelFormStyles>Informe seu sobrenome:</LabelFormStyles>
        <FormInput
          type="text"
          placeholder=""
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <Button variant="tertiary" type="submit">
          Criar Conta
        </Button>
        {error && <ErrorText>{error}</ErrorText>}
      </FormStyles>
    </ContainerFormStyles>
  );
};

export default RegisterForm;

import React, { useState } from "react";
import { nanoid } from 'nanoid';
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
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = userData;

    if (!firstName || !lastName || !email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setError("E-mail já existe! Tente outro.");
      return;
    }

    const userId = nanoid();

    const user = {
      id: userId,
      ...userData,
    };

    localStorage.setItem(email, JSON.stringify(user));

    onSubmit(user);
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
          value={userData.firstName}
          onChange={handleChange}
          name="firstName"
          autoComplete="off"
        />
        <LabelFormStyles>Informe seu sobrenome:</LabelFormStyles>
        <FormInput
          type="text"
          placeholder=""
          value={userData.lastName}
          onChange={handleChange}
          name="lastName"
          autoComplete="off"
        />
        <LabelFormStyles>Informe e-mail:</LabelFormStyles>
        <FormInput
          type="email"
          placeholder=""
          value={userData.email}
          onChange={handleChange}
          name="email"
          autoComplete="off"
        />
        <LabelFormStyles>Informe sua senha:</LabelFormStyles>
        <FormInput
          type="password"
          placeholder=""
          value={userData.password}
          onChange={handleChange}
          name="password"
          autoComplete="current-password"
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

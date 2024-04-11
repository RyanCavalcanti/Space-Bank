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
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegisterFormProps {
  onSubmit: (data: User) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<User>({
    id: 1, 
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = userData;

    if (!firstName || !lastName || !email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const newUser: User = {
      ...userData,
      id: Date.now(), 
    };

    onSubmit(newUser);

    setUserData({
      id: 1,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    const allUsers = await getUsersFromLocalStorage();
    allUsers[newUser.id] = newUser;
    setUsersInLocalStorage(allUsers);
  };

  const getUsersFromLocalStorage = async (): Promise<{ [key: number]: User }> => {
    const usersString = localStorage.getItem("users");
    return usersString ? JSON.parse(usersString) : {};
  };

  const setUsersInLocalStorage = async (users: { [key: number]: User }) => {
    localStorage.setItem("users", JSON.stringify(users));
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

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
import { registerUser } from "../../services/api";

interface RegisterFormProps {
  onSubmit: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await registerUser(userData);
      onSubmit();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Trata o tipo de erro como string
      } else {
        setError("Erro desconhecido"); // Trata outros tipos de erro
      }
    }
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

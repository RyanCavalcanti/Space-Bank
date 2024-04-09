import React, { useState } from "react";
import FormInput from "../common/FormInput";
import { ContainerFormStyles, FormStyles, LabelFormStyles } from "../../styles/FormStyles";
import Button from "../common/Button";

const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validar entrada e fazer registro
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill out all fields");
      return;
    }

    const existingUser = localStorage.getItem("email");
    if (existingUser) {
      setError("Email already exists");
      return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Registration successful");
  };

  return (
    <ContainerFormStyles as='div'>
      <FormStyles onSubmit={handleSubmit}>
        <LabelFormStyles>First Name:</LabelFormStyles>
        <FormInput
          type="text"
          placeholder=""
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <LabelFormStyles>Last Name:</LabelFormStyles>
        <FormInput
          type="text"
          placeholder=""
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <LabelFormStyles>Email:</LabelFormStyles>
        <FormInput
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelFormStyles>Password:</LabelFormStyles>
        <FormInput
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="tertiary" type="submit">Register</Button>
        {error && <div>{error}</div>}
      </FormStyles>
    </ContainerFormStyles>
  );
};

export default RegisterForm;

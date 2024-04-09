import React, { useState } from "react";
import FormInput from "../common/FormInput";

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
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <FormInput
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name:</label>
      <FormInput
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Email:</label>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default RegisterForm;

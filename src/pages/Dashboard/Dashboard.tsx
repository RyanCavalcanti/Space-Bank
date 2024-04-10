import { useState } from "react";
import AsideDashboard from "./AsideDashboard/AsideDashboard";
import DashboardIndex from "./DashboardIndex/DashboardIndex";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";

function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);

  const handleLogin = (userId: string) => {
    setUserId(userId);
  };

  const handleRegister = () => {
    alert("Registro bem-sucedido!");
  };

  return (
    <section>
      {userId ? (
        <>
          <DashboardIndex />
          <AsideDashboard />
        </>
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          <RegisterForm onSubmit={handleRegister} />
        </>
      )}
    </section>
  );
}

export default Dashboard;

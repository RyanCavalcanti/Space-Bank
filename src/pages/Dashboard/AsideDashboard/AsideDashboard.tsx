import { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../../../styles/Theme";
import Image from "../../../components/common/Image";
import Title from "../../../components/common/Title";
import logo from "../../../assets/Icon/Rocket-White.svg";
import Paragraph from "../../../components/common/Paragraph";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const AsideStyles = styled.aside`
  width: 100%;
  max-width: 360px;
  height: 100vh;
  min-height: 100vh;
  background-color: ${theme.colors.Red};
  padding-top: 100px;
`;

const BoxStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 340px;
`;

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > img {
    width: 100%;
    max-width: 70px;
    height: auto;
  }
`;

const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContainerBtns = styled.div`
  /* Button styles here */
`;

const ContainerHelp = styled.div`
  /* Help styles here */
`;

function AsideDashboard() {
  const [storedUser, setStoredUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchStoredUser = async () => {
      const userString = localStorage.getItem("users");
      const lastLoginString = localStorage.getItem("lastLogin");

      if (!userString || !lastLoginString) {
        window.location.replace("/login");
        return;
      }

      const users: { [key: string]: User } = JSON.parse(userString);
      const lastLogin = parseInt(lastLoginString, 10);

      if (Date.now() - lastLogin > 10 * 60 * 1000) {
        localStorage.removeItem("lastLogin");
        window.location.replace("/login");
        return;
      }

      const user: User = users[lastLogin];
      console.log("user:", user);
      setStoredUser(user);
    };

    fetchStoredUser();
  }, []);

  return (
    <AsideStyles>
      <BoxStyles>
        <ContainerLogo>
          <Image img={logo} alt="Logo SpaceBank" />
          <Title as="h5" color={theme.colors.White} fontWeight={600}>
            SpaceBank
          </Title>
        </ContainerLogo>

        <ContainerUser>
          <Title as="h3" color={theme.colors.White}>
            Bem-Vindo!
          </Title>
          {storedUser !== null && (
            <Paragraph fontWeight={600} color={theme.colors.White}>
              {`${storedUser.firstName}`}
            </Paragraph>
          )}
        </ContainerUser>

        <ContainerBtns>Btns</ContainerBtns>

        <ContainerHelp>Help</ContainerHelp>
      </BoxStyles>
    </AsideStyles>
  );
}

export default AsideDashboard;

import { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../../../styles/Theme";
import Image from "../../../components/common/Image";
import Title from "../../../components/common/Title";
import logo from '../../../assets/Icon/Rocket-White.svg';
import Paragraph from "../../../components/common/Paragraph";

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
  const [storedFirstName, setStoredFirstName] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      const firstName = localStorage.getItem("firstName") || "";
      setStoredFirstName(firstName);
    };

    fetchUserData();
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
          <Title as='h3' color={theme.colors.White}>Bem-Vindo!</Title>
          <Paragraph fontWeight={600} color={theme.colors.White}>{storedFirstName || "Usuário[Error213241]"}</Paragraph>
        </ContainerUser>

        <ContainerBtns>
          Btns
        </ContainerBtns>

        <ContainerHelp>
          Help
        </ContainerHelp>
      </BoxStyles>
    </AsideStyles>
  );
}

export default AsideDashboard;

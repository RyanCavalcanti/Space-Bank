import styled from "styled-components";
import Anchor from "../common/Anchor";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0;
  gap: 20px;

  & > p {
    margin: 0;

    & > span {
      font-weight: 600;
    }
  }
`

function Footer() {
  const currentYear = new Date().getFullYear();


  return(
    <FooterStyles>
      <p>Copyright © {currentYear} <span><Anchor href="/" variant="text">Ryancavalcanti.com.</Anchor></span></p>
      <p>Todos os direitos reservados</p>
    </FooterStyles>
  )
}

export default Footer;

import styled from "styled-components";
import Anchor from "../common/Anchor/Anchor";
import Paragraph from "../common/Paragraph/Paragraph";
import Span from "../common/Span/Span";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0;
  gap: 20px;
`

function Footer() {
  const currentYear = new Date().getFullYear();


  return(
    <FooterStyles>
      <Paragraph>Copyright © {currentYear} <Span><Anchor href="https://ryancavalcanti.com" variant="text">Ryancavalcanti.com</Anchor></Span></Paragraph>
      <Paragraph>Todos os direitos reservados</Paragraph>
    </FooterStyles>
  )
}

export default Footer;

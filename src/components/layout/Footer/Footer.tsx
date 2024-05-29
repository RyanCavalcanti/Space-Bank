import Anchor from "../../common/Anchor/Anchor";
import Paragraph from "../../common/Paragraph/Paragraph";
import Span from "../../common/Span/Span";
import { FooterStyles } from "./Footer.styles";

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

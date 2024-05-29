import Image from "../../../components/common/Image/Image";
import CreditCard from "../../../assets/Icon/CreditCard.svg";
import Shopping from "../../../assets/Icon/Shopping.svg";
import Clock from "../../../assets/Icon/Clock.svg";
import Gift from "../../../assets/Icon/Gift.svg";
import Percent from "../../../assets/Icon/Percent.svg";
import Shield from "../../../assets/Icon/Shield.svg";
import Title from "../../../components/common/Title/Title";
import Span from "../../../components/common/Span/Span";
import Paragraph from "../../../components/common/Paragraph/Paragraph";
import { ContainerArticle, ContainerBox, SectionStyles, StyledArticle } from "./SectionThree.styles";


interface CardsProps {
  img: string;
  alt: string;
  title: string;
  text: string;
  disabled?: boolean;
}

const Article = ({ img, alt, title, text, disabled }: CardsProps) => {
  return (
    <StyledArticle disabled={disabled}>
      <div>
        <Image img={img} alt={alt} />
      </div>
      <Title as="h5" fontWeight={600}>{title}</Title>
      <Paragraph marginTop={'16px'} marginBottom={'16px'}>{text}</Paragraph>
    </StyledArticle>
  );
};

function SectionThree() {
  return (
    <SectionStyles id="beneficios">
      <ContainerBox>
        <div>
          <Title as='h2'>
            Quais as vantagens de usar <Span>SpaceBank?</Span>
          </Title>
          <div>
            <ContainerArticle>
              <Article
                img={CreditCard}
                alt="Credit card"
                title="Cartão SpaceBank"
                text="O Cartão SpaceBank é um cartão de crédito exclusivo para clientes da SpaceBank, uma instituição financeira líder em inovação e tecnologia."
                disabled={false}
              />
              <Article
                img={Shopping}
                alt="Shopping"
                title="Investimentos"
                text="O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento e cashback."
                disabled={false}
              />
              <Article
                img={Clock}
                alt="Clock"
                title="Atendimento 24h"
                text="No SpaceBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana."
                disabled={false}
              />
              <Article img="" alt="" title="" text="" disabled={true} />
            </ContainerArticle>
            <ContainerArticle>
              <Article img="" alt="" title="" text="" disabled={true} />
              <Article
                img={Shield}
                alt="Shield"
                title="Segurança"
                text="Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado."
                disabled={false}
              />
              <Article
                img={Percent}
                alt="Percent"
                title="Sem taxas"
                text="Com o cartão SpaceBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas."
                disabled={false}
              />
              <Article
                img={Gift}
                alt="Gift"
                title="Receba prêmios"
                text="Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios."
                disabled={false}
              />
            </ContainerArticle>
          </div>
        </div>
      </ContainerBox>
    </SectionStyles>
  );
}

export default SectionThree;

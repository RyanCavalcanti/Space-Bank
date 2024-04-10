import styled from 'styled-components';
import imgError from '../../assets/Images/404Error.svg';
import Image from '../../components/common/Image';
import Title from '../../components/common/Title';
import NavBar from '../../components/layout/NavBar';
import theme from '../../styles/Theme';
import Anchor from '../../components/common/Anchor';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

function NotFound() {
  return (
    <section>
      <NavBar />
      <Container>
        <Title as='h3' color={theme.colors.Red}>Página não encontrada, volte para a <Anchor href='/' variant='none' style={{ fontWeight: '600' }}>Home</Anchor></Title>
        <Image img={imgError} alt='Error 404 - Page Not Found' style={{ maxWidth: '900px', width: '100%' }}/>
      </Container>
    </section>
  )
}

export default NotFound;

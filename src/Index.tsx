import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import HomePage from './pages/Home/Index';
import NotFound from './pages/NotFound/Index';
import Login from './pages/Login/Login/Index';
import Registro from './pages/Login/Registro/Index';
import Dashboard from './pages/Dashboard/Index';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
  }
`

function Index() {

  return (
    <>
      <GlobalStyle />
      <main className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<Login />} />
            <Route path='registro' element={<Registro />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default Index;

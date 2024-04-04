import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/GlobalStyle';

function Index() {

  return (
    <>
      <GlobalStyle/>
        <main className='content-container'>
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

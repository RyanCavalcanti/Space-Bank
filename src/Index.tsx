import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import NotFound from './pages/NotFound/Index';
import Login from './pages/Login/Index';
import Register from './pages/Regiter/Index';
import Dashboard from './pages/Dashboard/Index';
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
              <Route path='register' element={<Register />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
        </main>
    </>
  )
}

export default Index;

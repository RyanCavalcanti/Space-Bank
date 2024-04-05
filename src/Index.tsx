import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Regiter/Register';
import Dashboard from './pages/Dashboard/Dashboard';
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
              <Route path='registro' element={<Register />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
        </main>
    </>
  )
}

export default Index;

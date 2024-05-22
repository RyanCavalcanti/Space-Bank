import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import GlobalStyle from './styles/GlobalStyle';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';

function Index() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>
      <GlobalStyle/>
      <main className='content-container'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard/*' element={<PrivateRoute isAuthenticated={isAuthenticated} redirectTo="/login">
              <Dashboard />
            </PrivateRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default Index;

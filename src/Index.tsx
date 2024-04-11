import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import GlobalStyle from './styles/GlobalStyle';
import PrivateRoute from './components/auth/PrivateRoute';
import AsideDashboard from './pages/Dashboard/AsideDashboard/AsideDashboard';

function Index() {
  const isAuthenticated = !!localStorage.getItem('userId');

  return (
    <>
      <GlobalStyle/>
      <main className='content-container'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/index' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<PrivateRoute isAuthenticated={isAuthenticated} redirectTo="/login"><AsideDashboard /></PrivateRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default Index;

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import NotFound from './components/NotFound'
import './App.css';

const App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

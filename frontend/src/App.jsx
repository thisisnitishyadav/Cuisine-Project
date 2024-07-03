import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/Signin/LoginPopup';
import Signup from './components/Signin/Signup';
import Login from './components/Signin/Login';

//redux
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

const App = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    
  }, [localStorage]);

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup'element={<Signup />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      {showLogin && <LoginPopup showLogin={showLogin} setShowLogin={setShowLogin} />}
      <Footer />
    </div>
  );
};

export default App;

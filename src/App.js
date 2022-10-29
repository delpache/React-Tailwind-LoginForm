import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from './pages/Home';
import Contact from './pages/Contact';

import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth'

function App() {

  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth, 
      async authenticatedUser => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setAuthState('home');
        } else {
          setUser(null);
          setAuthState('login');
        }
      })

      return unSubscribeAuth;
  }, [user])

  return (
    
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/contact/create' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );

  // if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>
  // if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser} />
  // if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser} /> 
  // if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser} />
}

export default App;

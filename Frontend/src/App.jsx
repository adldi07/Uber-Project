import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptianLogin from "./pages/CaptianLogin";
import CaptianSignup from "./pages/CaptianSignup";
import { UserProtectedWrapper } from "./pages/UserProtectedWrapper.jsx";
// import User from './pages/UserLogout.jsx'
import UserLogout from "./pages/UserLogout.jsx";
import { CaptianHome } from "./pages/CaptianHome.jsx";
import { CaptianProtectedWrapper } from "./pages/CaptianProtectedWrapper.jsx";
import { CaptianLogout } from "./pages/CaptianLogout.jsx";
import Riding from './pages/Riding'
import CaptianRiding from './pages/CaptianRiding'
import 'remixicon/fonts/remixicon.css'

function App(){
  return <div >
    <Routes>
      <Route path ='/' element={<Start/>} />
      <Route path ='/login' element={<UserLogin/>} />
      <Route path='/riding' element={<Riding />} />


      <Route path='/captain-riding' element={<CaptianRiding />} />

      <Route path ='/signup' element={<UserSignup/>} />
      
      <Route path ='/captian-login' element={<CaptianLogin/>} />
      <Route path ='/captian-signup' element={<CaptianSignup/>} />
      <Route path ='/home' element={
        <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>
      } />
      <Route path ='/user/logout' element={
        <UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>
      } />
      <Route path ='/captian-home' element={
        <CaptianProtectedWrapper>
          <CaptianHome/>
        </CaptianProtectedWrapper>
      } />
      <Route path ='/captian-logout' element={
        <CaptianProtectedWrapper>
          <CaptianLogout/>
        </CaptianProtectedWrapper>
      } />
    </Routes>
  </div>
}

export default App;
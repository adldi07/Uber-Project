import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptianLogin from "./pages/CaptianLogin";
import CaptianSignup from "./pages/CaptianSignup";

function App(){
  return <div >
    <Routes>
      <Route path ='/' element={<Start/>} />
      <Route path ='/login' element={<UserLogin/>} />
      <Route path ='/signup' element={<UserSignup/>} />
      <Route path ='/captian-login' element={<CaptianLogin/>} />
      <Route path ='/captian-signup' element={<CaptianSignup/>} />
      <Route path ='/home' element={<Home/>} />
    </Routes>
  </div>
}

export default App;
import logo from './logo.svg';
import './App.css';
import Signin from './pages/Userloginsignup/Signin';
import SignUp from './pages/Userloginsignup/Signup';
import { Route, Router, Routes } from 'react-router-dom';
import { Cont } from './pages/Cont';
import { Footer } from './pages/Footer';
import { Navbar } from './components/Navbar';
import { Labr } from './pages/Labr';
import { Emp } from './pages/Emp';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { Contact } from './pages/Contact';

function App() {
  return (
   <>
 
 <div className="">
 <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/jobs" element={<Jobs/>}/>

      <Route path='/labor' element={<Labr/>}/>
      <Route path='/contractor' element={<Cont/>}/>
      <Route path='/employee' element={<Emp/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
          </Routes>
   <Footer/>
 </div>
   </>
  );
}

export default App;

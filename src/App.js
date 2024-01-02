import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Activities from './components/activities/Activities'
import Home from './components/home/Home'
import MyBooks from './components/myBooks/MyBooks'
import Traveling from './components/traveling/Traveling'
import TQP from './components/books/TQP'
import PIE from './components/books/PIE'
import SIP from './components/books/SIP'
import NoPage from './components/NoPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar /> 
      <BrowserRouter>
       <Routes>
          <Route index element = {<Home/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/Activities' element = {<Activities/>}/>
          <Route path = '/MyBooks' element = {<MyBooks/>}/>
          <Route path = '/Traveling' element = {<Traveling/>}/>
          <Route path = '*' element = {<NoPage/>}/>
          <Route path = '/TQP' element = {<TQP/>}/>
          <Route path = '/PIE' element = {<PIE/>}/>
          <Route path = '/SIP' element = {<SIP/>}/>
        </Routes> 
       </BrowserRouter> 
       <Footer/>
    </div>
  );
}



export default App;

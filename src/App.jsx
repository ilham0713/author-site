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
import Team from './components/team/Team'

function App() {
  return (
    <div className='page-container'>
      <Navbar /> 
      <BrowserRouter>
       <Routes>
          <Route index element = {<Home/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/Activities' element = {<Activities/>}/>
          <Route path = '/MyBooks'>
            <Route index element = {<MyBooks/>}/>
            <Route path = 'TQP' element = {<TQP/>}/>
            <Route path = 'PIE' element = {<PIE/>}/>
            <Route path = 'SIP' element = {<SIP/>}/>
          </Route>
          <Route path = '/Traveling' element = {<Traveling/>}/>
          <Route path = '*' element = {<NoPage/>}/>
          <Route path = '/Team' element = {<Team/>}/>
        </Routes> 
       </BrowserRouter> 
       <Footer/>
    </div>
  );
}



export default App;

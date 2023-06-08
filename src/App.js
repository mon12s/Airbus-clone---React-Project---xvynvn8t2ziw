import React from 'react'
import './App.css'
import Login from './components/Login'
//import RegistrationForm from './components/Registration'

//import Search from './components/Search'
//import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import {Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AllFlights from './components/AllFlights'
import Payment from './components/Payment'
import { useSelector } from 'react-redux'
import { selectIsUserLogin } from './features/userSlice'

function App() {

  const user = useSelector(selectIsUserLogin);

  console.log(user);
  return (
    <div>
      <Navbar/>
   <Home/>
  <AllFlights/>
  <Payment/>
    </div>

    
  )
}

export default App

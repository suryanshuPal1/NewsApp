import React from 'react'
import './App.css'
import Customize from './authpages/authSignUpPages/Customize'
import Email from './authpages/authSignUpPages/Email'
import Phone from './authpages/authSignUpPages/Phone'
import Signup from './authpages/authSignUpPages/Signup'
import Verify from './authpages/authSignUpPages/Verify'
import Vertification from './authpages/authSignUpPages/Vertification'


const App = () => {
  return (
    <>
      <Customize/>    
      <Email/>
      <Phone/>
      <Signup/>
      <Verify/>
      <Vertification/>
    </>
  )
}

export default App
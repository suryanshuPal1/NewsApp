import React from 'react'
import './App.css'
import Login from './authpages/login'
import ForgetPassword from './authpages/ForgetPassword'
import PassVerification from './authpages/PassVerification'
import ResetPass from './authpages/ResetPass'
import PassResetSuccessfully from './authpages/PassResetSuccessfully'
import Phone from './authpages/Phone'
import Email from './authpages/Email'

const App = () => {
  return (
    <>
        <Login/>
        <ForgetPassword/>
        <PassVerification/>
        <ResetPass/>
        <PassResetSuccessfully/>
        <Phone/>
        <Email/>
    </>
  )
}

export default App
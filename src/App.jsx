import React from 'react'
import './App.css'
import Login from './authpages/login'
import ForgetPassword from './authpages/ForgetPassword'
import PassVerification from './authpages/PassVerification'
import ResetPass from './authpages/ResetPass'
import PassResetSuccessfully from './authpages/PassResetSuccessfully'

const App = () => {
  return (
    <>
        <Login/>
        <ForgetPassword/>
        <PassVerification/>
        <ResetPass/>
        <PassResetSuccessfully/>
    </>
  )
}

export default App
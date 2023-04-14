
import React, { useState } from 'react'
import {Login} from '../components/Auth/Login'
import {Register} from '../components/Auth/Register'
import './authpg.css'

const Authpg = () => {
    const[currentForm,setCurrentForm]=useState('login')

    const toggleForm=(formName)=>{
        setCurrentForm(formName)
    }
  return (
    <div className='auth'>
        { 
        currentForm==='login'?
            <Login onFormSwitch={toggleForm}/>
            :
            <Register onFormSwitch={toggleForm}/>
        }
    </div>
  )
}

export default Authpg

import React from 'react'
import guy from '../../guy-greeting.png';
import './Greeting.css';

const user = localStorage.getItem("userName");
  const userName= JSON.parse(user)

const Greetings = () => {
  return (
    <div className='greeting-container'>
      <div>
      <span>Hello {userName}, How you doing?</span>
      </div>
      <div>
      <img src={guy} className='img' alt='guy'/>
      </div>

      
        
    </div>
  )
}

export default Greetings
import React from 'react'
import Navbar from './Navbar'

export default function PSignin() {
  return (
    <div>
        <Navbar/>
     <p className='text-3xl'>Sign In</p>
      <form>
        <div>
        <input className='border border-gray-800 rounded' type="number" id="h_id" name="h_id" placeholder="Enter 8 digit Health ID " />
        <input className='border border-gray-800 rounded' type="number" id="mobile-num" name="mobilenum" placeholder="Enter Mobile Number" />
        
        <a href='/create'> New User. REGISTER</a>
        </div>
        <br/>
        <button id="button-register">Sign In</button>
      </form>
    </div>
  )
}

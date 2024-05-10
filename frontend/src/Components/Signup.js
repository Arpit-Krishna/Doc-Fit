import React from 'react'
import Navbar from './Navbar'


export default function Signup() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-screen -m-16'>
                <form className='backdrop-blur bg-cyan-700/50 p-4 rounded-xl w-96'>
                    <div className='text-4xl flex justify-center w-full m-2'>Join Us Today!</div>
                    <div className='flex justify-center text-xl text-gray-300 my-6'>Signup now to become a member</div>
                    <label className='flex flex-col -my-4 w-full p-1'>
                    <input required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' type="text" id="patient-name" name="patient-name" placeholder="Enter your name" />
                    </label>
                    <label className='flex flex-col -my-4 w-full p-1'>
                        <input type='email' required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter Email' />
                    </label>
                    <label className='flex flex-col -my-4 w-full p-1'>
                    <select required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' id="gender" >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </label>
                    <label className='flex flex-col w-full -my-4 p-1'>
                    <input required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' type="number" id="age" name="age" placeholder="Enter Age" />
                    </label>
                    <label className='flex flex-col w-full p-1'>
                        <input type='password' required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Create password' />
                    </label>

                    <div className='flex justify-center'>
                        <button className="relative mt-5 flex justify-center items-center border border-cyan-500 w-48 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <div><span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Signup</span>
                            </div>
                        </button>
                    </div>
                    <div className='flex justify-center p-3'><span>Already a member?</span><a href='/Login' className='text-indigo-800 hover:underline'>Login Here</a></div>

                </form>
            </div>
        </div>
    )
}


// <input className='border border-gray-800 rounded' type="text" id="patient-name" name="patient-name" placeholder="Enter Patient Name" />

// <input className='border border-gray-800 rounded' type="number" id="age" name="age" placeholder="Enter Age" />

// <select className='border border-gray-800 rounded' id="gender" >
//   <option value="">Select Gender</option>
//   <option value="male">Male</option>
//   <option value="female">Female</option>
//   <option value="other">Other</option>
// </select>
// <input className='border border-gray-800 rounded' type="number" id="mobile-num" name="mobilenum" placeholder="Enter Mobile Number" />
// <select className='border border-gray-800 rounded' id="blood-type">
//   <option value="">Select Blood Type</option>
//   <option value="A+">A+</option>
//   <option value="A-">A-</option>
//   <option value="B+">B+</option>
//   <option value="B-">B-</option>
//   <option value="O+">O+</option>
//   <option value="O-">O-</option>
//   <option value="AB+">AB+</option>
//   <option value="AB-">AB-</option>
// </select>

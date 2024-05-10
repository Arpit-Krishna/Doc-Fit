import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function Landingpage() {
    const navigate = useNavigate()
    const gtform = () => {
        navigate('/form')
    }
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='md:flex md:justify-between md:items-center w-full md:h-4/5'>
                <div className='md:w-1/3 h-fit p-10'>
                    <div className=''>
                        <div className=''>
                            <p className='text-6xl font-bold text-slate-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0)] h-[70px]'>Pharmacy</p>
                        </div>
                        <div className='text-4xl font-bold text-slate-600'>
                            <p className='lg:h-11'>Landing Page</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-slate-600 text-lg'>
                            erofm owof ori hiu fhiufh ifhearijfsdj kjfnnkaf ofoi foiwe fowifw awfwf   iu h iho bvjh bh vuy vuy b ijn iun ij n ojm okdf dfk krg kr r wr bg gfg sf brt b sh tyjn  dv earg jnt  b gf hrst gear g fj ejn  hrfgtdt ytr tfdhyfgv rtdfxhg vrtgfj hbrtgfdhgrtdfg rfd
                        </p>
                    </div>
                </div>
                <div className='animate-floaty flex justify-center'>
                    <img src={'doctor'} alt='doctor'></img>
                </div>
            </div>
            <div className='flex'>
                <div className='flex justify-start px-10'>
                    <button className='border h-10 w-28 rounded-3xl bg-gradient-to-br from-cyan-700 to-cyan-400 active:from-cyan-400 active:to-cyan-700'>Learn More</button>
                </div>
                <div className='flex justify-start px-10'>
                    <button className='border h-10 w-28 rounded-3xl bg-gradient-to-br from-cyan-700 to-cyan-400 active:from-cyan-400 active:to-cyan-700'>Learn More</button>
                </div>
            </div>
            <div className='fixed bottom-0 right-4 text-white font-bold py-2 px-4 rounded'>
                <button className='border mb-4 ml-4 bg-green-800 rounded-full w-16 h-16 text-3xl' onClick={gtform}>+</button>
            </div>
        </div>
    )
}

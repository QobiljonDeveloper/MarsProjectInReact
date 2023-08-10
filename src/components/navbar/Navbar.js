import React from 'react'
import Logo from '../others/Logo/Logo'
import Typography from '../others/Typography/Typography'

const Navbar = () => {
    return (
        <nav className='py-6 shadow-2xl relative z-50 p-11'>
            <div className='max-w-screen-2xl mx-auto flex items-center justify-between'>
                <Logo />

                <div className='flex items-center gap-5'>
                    <div className='rounded-full w-[30px] h-[30px] bg-[#E3391B]' />
                    <Typography text="Karimberdiyev Mahmudjon" classes="text-2xl font-regular cursor-pointer transition hover:text-[#E3391B]" />
                    <img className='cursor-pointer' src="./images/log-out-svgrepo-com 1.png" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
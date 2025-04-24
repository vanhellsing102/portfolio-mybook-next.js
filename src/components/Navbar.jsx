"use client";
import { navData } from '@/libs/data';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeId, setActiveId] = useState();
    const handleActiveLink = (id) =>{
        setActiveId(id);
    }
    return (
        <div className='flex items-center justify-between text-[#F8F8F8]'>
            <a className='text-4xl font-semibold' href={'#'}>MyBook</a>
            <nav className='fixed justify-end w-full md:right-10 right-7 md:flex hidden z-10'>
                <ul className='flex items-center backdrop-blur-xl gap-5 py-3 px-5 text-[15px] bg-white/10 border border-white/30 rounded-lg shadow-lg'>
                    {
                        navData.map(data =>
                            <li className='font-bold  text-slate-200' key={data?.id}>
                                <a onClick={() => handleActiveLink(data?.id)} className={`py-2 px-3 relative group ${activeId == data?.id ? "bg-[#00F5A0] text-slate-800" : ""} rounded-lg`} href={data?.link}>
                                    <span className='relative z-10 hover:text-slate-800 transition-all duration-300'>{data?.title}</span>
                                    <span className='w-0 absolute h-full bg-[#00F5A0] group-hover:w-full transition-all duration-100 z-0 top-0 rounded-lg left-1/2 group-hover:left-0'></span>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </nav>

            {/* responsive */}
            <div className='md:hidden block relative w-full'>
                <div className='flex w-full justify-end'>
                    <HiOutlineMenuAlt2 onClick={() =>setOpenMenu(!openMenu)} className='text-2xl text-[#00F5A0]'></HiOutlineMenuAlt2>
                </div>
                <nav className={`absolute top-8 -right-72 w-full ${openMenu ? "right-0" : ""} transition-all duration-700`}>
                    {
                        openMenu &&
                        <ul className={`p-3 flex flex-col items-center text-[15px] bg-white/10 border border-white/30 rounded-lg shadow-lg`}>
                        {
                            navData.map(data =>
                                <li className='font-bold text-slate-200' key={data?.id}>
                                    <a onClick={() =>setOpenMenu(false)} className='px-3 py-2 relative group' href={data?.link}>
                                        <span className='relative z-10 hover:text-black transition-all duration-300'>{data?.title}</span>
                                        <span className='w-0 absolute h-full bg-[#00F5A0] group-hover:w-full transition-all duration-100 z-0 top-0 rounded-lg left-1/2 group-hover:left-0'></span>
                                    </a>
                                </li>
                            )
                        }
                        </ul>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
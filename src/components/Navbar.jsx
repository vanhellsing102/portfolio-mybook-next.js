"use client";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from 'react';
import navLinks from "@/libs/navbar";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeId, setActiveId] = useState();
    const handleActiveLink = (id) =>{
        setActiveId(id);
    }
    return (
        <div className='flex items-center justify-between text-[#F8F8F8] relative'>
            <a className='text-4xl font-semibold' href={'#'}>MyBook</a>
            <nav className='md:flex hidden z-10 fixed justify-end w-full md:right-10 right-7'> 
                <ul className='flex items-center backdrop-blur-xl gap-5 py-3 px-5 text-[15px] bg-white/10 border border-white/30 rounded-lg shadow-lg'>
                    {
                        navLinks.map(data =>
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
            <button onClick={() =>setOpenMenu(!openMenu)} className='md:hidden inline-block fixed top-5 right-3 z-10'>
                    <HiOutlineMenuAlt2 size={27} className='text-[#00F5A0]'></HiOutlineMenuAlt2> 
            </button>
            <nav className={`absolute w-full ${openMenu ? "right-0" : ""} md:hidden transition-all duration-700`}>
                    {
                        openMenu &&
                        <ul className={`p-3 flex flex-col left-0 top-[60px] items-center text-[15px] bg-slate-500 border border-white/30 fixed w-full shadow-lg z-10`}>
                        {
                            navLinks.map(data =>
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
    );
};

export default Navbar;
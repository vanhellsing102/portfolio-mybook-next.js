"use client"
import { heroData } from "@/libs/data";
import "../styles/Hero.css";
import { Typewriter } from 'react-simple-typewriter';
import {motion} from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";
import { IoCallOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import hero from "../../public/images/murad.jpg";
import Image from "next/image";
import earth from "../../public/images/earth (1).png";
import moon from "../../public/images/moon.png";

const Hero = () => {
    
    return (
        <div id="home" className='flex justify-center md:flex-row flex-col items-center md:min-h-screen h-full md:gap-5 gap-20'>
            {/* describe section */}
            <div className='md:w-1/2 flex items-center flex-col'>
                <p className="text-xl border border-slate-300/10 bg-white/10 px-2 rounded-lg text-slate-200">Hi, there</p>
                <h2 className="text-[#F8F8F8] md:text-[58px] text-5xl font-semibold">I'm <span className="capitalize bg-clip-text text-transparent nameColor">{heroData?.name}!</span></h2>
                <h3 className="text-4xl font-semibold">
                    <span className="text-slate-300">I'm a</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-fuchsia-500 to-red-600">
                        <Typewriter words={['MERN-Stack Devoloper', "CSE Student", 'Learner', 'Traveller', 'Marketing Expert', 'Review Provider']} loop={true} cursor cursorStyle='_' typeSpeed={100} deleteSpeed={50} delaySpeed={1000}/>
                    </span>
                </h3>
                <div className="flex flex-col gap-1 mt-3">
                    <div className="flex items-center gap-3 text-[20px] border border-slate-300/10 bg-white/10 px-3 rounded-lg cursor-auto hover:scale-[103%] transition-all duration-200">
                        <IoCallOutline className="text-[#00F5A0]"></IoCallOutline>
                        <span className="text-slate-200">{heroData?.mobile}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[20px] border border-slate-300/10 bg-white/10 px-3 rounded-lg cursor-auto hover:scale-[103%] transition-all duration-200">
                        <MdOutlineMailOutline className="text-[#00F5A0]"></MdOutlineMailOutline>
                        <span className="text-slate-200">{heroData?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[20px] border border-slate-300/10 bg-white/10 px-3 rounded-lg cursor-auto hover:scale-[103%] transition-all duration-200">
                        <CiLocationOn className="text-[#00F5A0]"></CiLocationOn>
                        <span className="text-slate-200">{heroData?.location}</span>
                    </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                    <a className="bg-[#00F5A0] border border-slate-200 px-4 py-1 rounded-lg text-[17px] flex items-center gap-3 cursor-pointer text-slate-800 font-semibold hover:scale-[103%] hover:shadow-2xl transition-all duration-200 shadow-[#00F5A0]">
                        <IoDocumentTextOutline></IoDocumentTextOutline>
                        <span>Resume</span>
                    </a>
                    <a href="#contact" className="bg-[#00F5A0] border border-slate-200 px-4 py-1 rounded-lg text-[17px] flex items-center gap-3 cursor-pointer text-slate-800 font-semibold hover:scale-[103%] hover:shadow-2xl transition-all duration-200 shadow-[#00F5A0]">
                        <MdOutlineMailOutline></MdOutlineMailOutline>
                        <span>Contact Me</span>
                    </a>
                </div>
                <div className="flex items-center gap-2 mt-3 text-2xl text-slate-200">
                    <a className="border border-[#00F5A0] p-1 rounded-full hover:bg-[#00F5A0] hover:border-slate-200 duration-200 transition-all" href={heroData?.socialLinks?.facebook} target="_blank">
                        <FaFacebookSquare className="hover:text-blue-600 duration-200 transition-all"></FaFacebookSquare>
                    </a>
                    <a className="border border-[#00F5A0] p-1 rounded-full hover:bg-[#00F5A0] hover:border-slate-200 duration-200 transition-all" href={heroData?.socialLinks?.linkedIn} target="_blank">
                        <FaLinkedin className="hover:text-blue-600 duration-200 transition-all"></FaLinkedin>
                    </a>
                    <a className="border border-[#00F5A0] p-1 rounded-full hover:bg-[#00F5A0] hover:border-slate-200 duration-200 transition-all" href={heroData?.socialLinks?.github} target="_blank">
                        <FaSquareGithub className="hover:text-slate-900 duration-200 transition-all"></FaSquareGithub>
                    </a>
                    <a className="border border-[#00F5A0] p-1 rounded-full hover:bg-[#00F5A0] hover:border-slate-200 duration-200 transition-all" href={heroData?.socialLinks?.twitter} target="_blank">
                        <FaSquareXTwitter className="hover:text-blue-600 duration-200 transition-all"></FaSquareXTwitter>
                    </a>
                    <a className="border border-[#00F5A0] p-1 rounded-full hover:bg-[#00F5A0] hover:border-slate-200 duration-200 transition-all" href={heroData?.socialLinks?.instagram} target="_blank">
                        <FaSquareInstagram className="hover:text-fuchsia-600 duration-200 transition-all"></FaSquareInstagram>
                    </a>
                </div>
                {/* <motion.div 
                    animate={{x: 0, y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 0.5, ease: "easeInOut",}}>
                    <IoMdArrowDown className="text-2xl"></IoMdArrowDown>
                </motion.div> */}
            </div>

            {/* image section with solar system */}
            <div className='md:w-1/2 flex items-center justify-center'>
                <div className="relative">
                    <Image className="md:h-[250px] md:w-[250px] h-[150px] w-[150px] border-4 border-[#FF4500] shadow-[0_10px_40px_rgba(255,69,0,1),0_-10px_40px_rgba(255,69,0,1)] rounded-full z-0" src={hero} alt="" />
                    <div className="mercury border-2 border-slate-500 rounded-full absolute -inset-4 md:-inset-8">
                        <div className="relative">
                            <div className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] bg-[#b1b1b1] absolute rounded-full md:top-[60px] top-[38px] md:left-2 drop-shadow-2xl"></div>
                        </div>
                    </div>
                    <div className="earth border-2 border-slate-500 rounded-full absolute -inset-12 md:-inset-[90px]">
                        <div className="relative">
                            <div className="md:top-[47px] md:left-6 top-[54px] absolute">
                                <Image className="md:w-[55px] md:h-[55px] w-[35px] h-[35px] rounded-full relative" src={earth} alt="" />
                                <div className="moon absolute md:border-2 border border-slate-500 md:-inset-3 -inset-[4px] rounded-full">
                                    <div className="relative w-full h-full md:bottom-[12px] bottom-[8px]">
                                        <Image className="absolute md:w-[45px] md:h-[30px] w-[30px] h-[20px]" src={moon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-slate-500 mars rounded-full absolute -inset-20 md:-inset-[155px]">
                        <div className="relative">
                            <div className="absolute md:w-[45px] md:h-[45px] w-[25px] md:top-16 md:left-[54px] top-10 left-6 h-[25px] bg-[#F79227] rounded-full shadow-[0_0_30px_rgba(247,146,39,0.8)]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
"use client";
import { heroData } from "@/libs/data";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const Contact = () => {
    const handleSendMessage = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const message = form.get("message");
        console.log(name, email, message)
    }
    return (
        <div id='contact' className='md:mx-28 mx-4'>
            <div className="flex justify-center ">
                <h2 className="text-5xl font-semibold mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600">Education</h2>
            </div>
            <div className="bg-white/10 border border-white/30 rounded-xl justify-between items-center flex md:flex-row flex-col p-5 gap-6">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-semibold text-[#00F5A0]">To connect with me</h2>
                    <p className="text-lg text-slate-200">Whether you want to collaborate, hire me, or just have a quick chat, I’m always open! Fill out the form or reach out directly.</p>
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
                    <div className="flex items-center justify-center gap-2 mt-3 text-2xl text-slate-200">
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
                </div>
                <div className="md:w-1/2">
                    <form onSubmit={handleSendMessage} className="space-y-3">
                        <div>
                            <label className="block text-lg font-medium text-slate-200">Name:</label>
                            <input name="name" type="text" placeholder="Enter your name" className="w-full py-2 px-5 border border-white/30 outline-none rounded-lg text-slate-300"/>
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-slate-200">Email:</label>
                            <input name="email" type="Email" placeholder="Enter your email" className="w-full py-2 px-5 border border-white/30 outline-none rounded-lg text-slate-300"/>
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-slate-200">Message:</label>
                            <textarea name="message" id="message" placeholder="Enter your message" className="w-full py-2 px-5 border border-white/30 outline-none rounded-lg text-slate-300 min-h-[200px]"></textarea>
                        </div>
                        <button type="submit" className="w-full py-1 bg-[#00F5A0] rounded-lg border border-white/30 hover:scale-[101%] transition-all duration-200 cursor-pointer flex justify-center gap-2 items-center">Send Message <TiMessages /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
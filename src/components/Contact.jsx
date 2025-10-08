"use client";
import heroData from "@/libs/hero";
import Heading from "@/shared/Heading";
import SocialLink from "@/shared/SocialLink";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CiLocationOn } from "react-icons/ci";
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
        const newMessage = {
            name, 
            email,
            message
        }
        axios.post('/api/contact', newMessage)
        .then(res =>{
            console.log(res.data.message);
            toast.success(res.data?.message);
        })
        // console.log(name, email, message);
    }
    return (
        <div id='contact' className='md:mx-28'>
            <Heading title={"Contact Me"}></Heading>
            <div className="bg-white/10 border border-white/30 rounded-xl justify-between items-center flex md:flex-row flex-col md:p-5 p-1 gap-6">
                <div className="md:w-1/2 mx-2 md:px-0">
                    <h2 className="text-[36px] md:text-[42px] lg:text-5xl font-semibold text-[#00F5A0]">To connect with me</h2>
                    <p className="text-sm md:text-[15px] lg:text-[16px] text-slate-200">Whether you want to collaborate, hire me, or just have a quick chat, I’m always open! Fill out the form or reach out directly.</p>
                    <div className="flex flex-col md:gap-3 gap-2 mt-3">
                        <div className="flex items-center gap-3 text-[17px] md:text-[18px] lg:text-[20px] border border-slate-300/10 bg-white/10 px-3 rounded-lg cursor-auto hover:scale-[103%] transition-all duration-200">
                            <IoCallOutline className="text-[#00F5A0]"></IoCallOutline>
                            <span className="text-slate-200">{heroData?.mobile}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[17px] md:text-[18px] lg:text-[20px] border border-slate-300/10 bg-white/10 px-3 rounded-lg cursor-auto hover:scale-[103%] transition-all duration-200">
                            <MdOutlineMailOutline className="text-[#00F5A0]"></MdOutlineMailOutline>
                            <span className="text-slate-200">{heroData?.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[17px] md:text-[18px] lg:text-[20px] border border-slate-300/10 bg-white/10 px-3 rounded-lg cursor-auto hover:scale-[103%] transition-all duration-200">
                            <CiLocationOn className="text-[#00F5A0]"></CiLocationOn>
                            <span className="text-slate-200">{heroData?.location}</span>
                        </div>
                    </div>
                    <SocialLink></SocialLink>
                </div>
                <div className="md:w-1/2 w-full px-2 md:px-0 pb-2 md:pb-0">
                    <form onSubmit={handleSendMessage} className="md:space-y-3 space-y-1">
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
            <Toaster></Toaster>
        </div>
    );
};

export default Contact;
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";
import { heroData } from "@/libs/data";

const Footer = () => {
    const year = new Date().getFullYear();
    // console.log(year);
    return (
        <div className="border-t border-white/30 py-5">
            <div className="flex items-center justify-center gap-2 mt-3 text-2xl text-slate-200 mb-2">
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
            <p className="text-xl font-semibold text-slate-200 flex justify-center items-center"><MdOutlineCopyright></MdOutlineCopyright> {year} Md Murad</p>
            <p className="text-center text-[16px] text-slate-200">All rights reserved.</p>
        </div>
    );
};

export default Footer;
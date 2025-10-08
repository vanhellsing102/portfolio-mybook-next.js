import SocialLink from "@/shared/SocialLink";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
    const year = new Date().getFullYear();
    // console.log(year);
    return (
        <div className="border-t border-white/30 py-5">
            <SocialLink></SocialLink>
            <p className="text-xl font-semibold text-slate-200 flex justify-center items-center"><MdOutlineCopyright></MdOutlineCopyright> {year} Md Murad</p>
            <p className="text-center text-[16px] text-slate-200">All rights reserved.</p>
        </div>
    );
};

export default Footer;
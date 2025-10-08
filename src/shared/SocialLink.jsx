import socialLinks from "@/libs/socialLinks";
import React from "react";

const SocialLink = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-3 text-2xl text-slate-200">
      {socialLinks.map((link, index) => (
        <a key={index}
          className="border border-[#00F5A0] p-1 rounded-full hover:bg-[#00F5A0] hover:border-slate-200 duration-200 transition-all"
          href={link?.link}
          target="_blank"
        >
          <p className="hover:text-slate-900 duration-200 transition-all">{link?.icon && <link.icon/>}</p>
        </a>
      ))}
    </div>
  );
};

export default SocialLink;

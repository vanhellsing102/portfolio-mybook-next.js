import about from '@/libs/about';
import Heading from '@/shared/Heading';
import React from 'react';  

const About = () => {
    return (
        <div id='about'>
            <Heading title={"Who Am I"}></Heading>
            <div className='flex items-center flex-col gap-2 relative'>
                {
                    about.map((text, index) =>
                        <div key={index} className='md:w-4/5 text-slate-200 bg-white/10 p-3 rounded-xl border border-white/30 hover:shadow-md shadow-[#00F5A0] hover:scale-[102%] hover:-translate-y-1 transition-all duration-200'>
                            <p className='text-sm md:text-[15px] lg:text-[16px]'>{text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default About;
import React from 'react';  

const About = () => {
    return (
        <div id='about'>
            <div className="flex justify-center">
                <h2 className='text-5xl font-semibold mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600'>Who Am I</h2>
            </div>
            <div className='flex items-center flex-col gap-2 relative'>
                <div className='md:w-4/5 text-slate-200 bg-white/10 p-3 rounded-xl border border-white/30 hover:shadow-md shadow-[#00F5A0] hover:scale-[102%] hover:-translate-y-1 transition-all duration-200'>
                    <p>I'm from Bangladesh, currently pursuing my studies in Computer Science and Engineering. I'm a passionate MERN stack developer with a strong interest in building scalable and modern web applications.</p>
                </div>
                <div className='md:w-4/5 text-slate-200 bg-white/10 rounded-xl p-3 rounded-x border border-white/30 hover:shadow-md shadow-[#00F5A0] hover:scale-[102%] hover:-translate-y-1 transition-all duration-200'>
                    <p>I specialize in working with MongoDB, Express.js, React, and Node.js, and I’ve also gained hands-on experience with Next.js to develop fast, SEO-friendly, and server-rendered React apps. I enjoy using tools like Tailwind CSS and Framer Motion to create clean and interactive user interfaces. I'm also comfortable using JavaScript, HTML, CSS, and frameworks like Tailwind CSS for designing responsive interfaces.</p>
                </div>
                <div className='md:w-4/5 text-slate-200 bg-white/10 rounded-xl p-3 rounded-x border border-white/30 hover:shadow-md shadow-[#00F5A0] hover:scale-[102%] hover:-translate-y-1 transition-all duration-200'>
                    <p>I’m a team player who loves collaborating on real-world projects, learning from others, and continuously improving. I believe in writing clean, maintainable code and solving problems with efficiency and creativity.</p>
                </div>
                <div className='md:w-4/5 text-slate-200 bg-white/10 rounded-xl p-3 rounded-x border border-white/30 hover:shadow-md shadow-[#00F5A0] hover:scale-[102%] hover:-translate-y-1 transition-all duration-200'>
                    <p>My future goal is to contribute to impactful projects and grow as a full-stack developer. I’m particularly excited about working on real-time apps, e-commerce platforms, and SaaS products that make a difference.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';

const Stats = () => {
    return (
        <div id='stats' className='md:mx-12 mx-4'>
            <div className="flex justify-center">
                <h2 className="text-5xl font-semibold mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600">GitHub Statistics</h2>
            </div>
            <div className='flex items-center justify-between'>
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=vanhellsing102&layout=compact&theme=tokyonight"
                    alt="Top Languages"
                    className="mx-auto w-full max-w-md rounded-lg hover:scale-[102%] hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400 transition-all duration-200 cursor-pointer"/>
                <img
                    src="https://github-readme-stats.vercel.app/api?username=vanhellsing102&show_icons=true&count_private=true&theme=tokyonight"
                    alt="GitHub Stats"
                    className="mx-auto w-full max-w-md rounded-md hover:scale-[102%] hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-500 transition-all duration-200 cursor-pointer"/>
            </div>
        </div>
    );
};

export default Stats;
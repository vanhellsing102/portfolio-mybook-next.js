import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div id='github' className='md:mx-12'>
            <div className="flex justify-center ">
                <h2 className="text-5xl font-semibold mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600">Github Contributions</h2>
            </div>
            <div className='bg-white/10 rounded-xl flex justify-center hover:shadow-lg hover:shadow-cyan-500 items-center py-5 text-slate-200 hover:scale-[101%] hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
                <GitHubCalendar blockSize={16} username="vanhellsing102" />
            </div>
        </div>
    );
};

export default Github;
import Heading from '@/shared/Heading';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div id='github' className='md:mx-10'>
            <Heading title={"Github Contributions"}></Heading>
            <div className='bg-white/10 rounded-xl flex justify-center hover:shadow-lg hover:shadow-cyan-500 items-center md:py-5 py-2 px-2 text-slate-200 hover:scale-[101%] hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
                <GitHubCalendar blockSize={16} username="vanhellsing102" />
            </div>
        </div>
    );
};

export default Github;
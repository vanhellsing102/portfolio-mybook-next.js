import { skills } from "@/libs/data";
import Image from "next/image";

const Skills = () => {
    return (
        <div id='skills' className="md:mx-14 mx-0">
            <div className="flex justify-center">
                <h2 className='text-5xl font-semibold mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600'>My Skills</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {
                    skills.map(item =>
                        <div className="flex flex-col bg-white/10 rounded-lg border cursor-pointer hover:scale-[107%] hover:shadow-md shadow-fuchsia-500 border-white/30 p-1 items-center transition-all duration-200" key={item?.id}>
                            <Image width={80} height={100} src={item?.image} alt={item?.name}></Image>
                            <p className="text-slate-200 capitalize">{item.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;
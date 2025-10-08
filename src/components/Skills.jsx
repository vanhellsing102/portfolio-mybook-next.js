import skills from "@/libs/skills";
import Heading from "@/shared/Heading";
import Image from "next/image";

const Skills = () => {
    return (
        <div id='skills' className="md:mx-14 mx-0">
            <Heading title={"my skills"}></Heading>
            <div className="flex flex-wrap justify-center gap-4">
                {
                    skills.map(item =>
                        <div className="flex flex-col bg-white/10 rounded-lg border cursor-pointer hover:scale-[107%] hover:shadow-md shadow-fuchsia-500 border-white/30 p-2 items-center transition-all duration-200" key={item?.id}>
                            <Image width={80} height={100} style={{height: "auto"}} src={item?.image} alt={item?.name}></Image>
                            <p className="text-slate-200 capitalize">{item.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;
import experience from "@/libs/experience";
import Heading from "@/shared/Heading";


const Experience = () => {
  return (
    <div id="experience" className='md:mx-10'>
      <Heading title={'Experience'}></Heading>
      <div className="">
        {
            experience.map((item, index) =>
                <div className="flex items-center gap-3 mt-2" key={index}>
                    <div className="inline-grid *:[grid-area:1/1]">
                      <div className="status status-lg status-secondary animate-ping"></div>
                      <div className="status status-lg status-success"></div>
                    </div>
                    <p className="text-slate-300 text-sm md:text-[15px] lg:text-[16px]">{item}</p>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Experience;

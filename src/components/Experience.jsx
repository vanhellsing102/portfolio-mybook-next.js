import { experience } from "@/libs/data";

const Experience = () => {
  return (
    <div id="experience" className='md:mx-14 mx-4'>
      <div className="flex justify-center ">
        <h2 className="text-5xl font-semibold mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600">
          Experience
        </h2>
      </div>
      <div className="">
        {
            experience.map((item, index) =>
                <div className="flex items-center gap-3 mt-2" key={index}>
                    <div className="inline-grid *:[grid-area:1/1]">
                      <div className="status status-lg status-secondary animate-ping"></div>
                      <div className="status status-lg status-success"></div>
                    </div>
                    <p className="text-slate-300">{item}</p>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Experience;

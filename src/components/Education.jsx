import Heading from "@/shared/Heading";
import { LuGraduationCap } from "react-icons/lu";

const Education = () => {
    return (
        <div id="education" className='md:mx-28'>
            <Heading title={"Education"}></Heading>
            <div className="flex justify-center">
                <ul className="steps steps-vertical w-full">
                    <li className="step step-success">
                      <span className="step-icon"><LuGraduationCap className="text-xl"></LuGraduationCap></span>
                      <div className="bg-white/10 border border-white/30 md:p-3 p-2 rounded-xl w-full md:mb-2 mb-1">
                        <h2 className="text-[#F8F8F8] text-xl md:text-2xl font-semibold ">Computer Science and Technology (CST)</h2>
                        <h3 className="text-slate-200 text-[16px] md:text-lg">Thakurgaon Polytechnic Institute, Thakurgaon</h3>
                        <p className="flex justify-center gap-16 items-center text-[#A3B3C2]">
                            <span>2021-2025</span>
                            <span>GPA- 3.95 out of 4.00</span>
                        </p>
                      </div>
                    </li>
                    <li className="step step-success md:mb-1">
                      <span className="step-icon"><LuGraduationCap className="text-xl"></LuGraduationCap></span>
                      <div className="bg-white/10 border border-white/30 md:p-3 p-2 rounded-xl w-full">
                        <h2 className="text-[#F8F8F8] text-xl md:text-2xl font-semibold ">Secondary School Certificate (SSC)</h2>
                        <h3 className="text-slate-200 text-[16px] md:text-lg">Boda Govt Pilot Model School and College</h3>
                        <p className="flex justify-center gap-16 items-center text-[#A3B3C2]">
                            <span>2016-2021</span>
                            <span>GPA- 5.00 out of 5.00</span>
                        </p>
                      </div>
                    </li>
                    <li className="step step-success">
                      <span className="step-icon"><LuGraduationCap className="text-xl"></LuGraduationCap></span>
                      <div className="bg-white/10 border border-white/30 md:p-3 p-2 rounded-xl w-full">
                        <h2 className="text-[#F8F8F8] text-xl md:text-2xl font-semibold ">Primary School Certificate (PSC)</h2>
                        <h3 className="text-slate-200 text-[16px] md:text-lg">Sipaipara Sikhon School</h3>
                        <p className="flex justify-center gap-16 items-center text-[#A3B3C2]">
                            <span>2011-2016</span>
                            <span>GPA- 4.83 out of 5.00</span>
                        </p>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Education;
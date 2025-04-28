"use client"
import Tilt from 'react-parallax-tilt';
import { projects } from '@/libs/data';
import Image from 'next/image';
import { VscGithubAlt } from "react-icons/vsc";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const Projects = () => {
    return (
        <div id="projects" className='md:mx-14 mx-3'>
            <div className="flex justify-center">
                <h2 className='text-5xl font-semibold mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-red-600'>My Projects</h2>
            </div>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    projects.map(project =>
                        <Tilt key={project?.id}
                            className="background-stripes rounded-xl p-5 bg-white/10 border border-white/30 parallax-effect-glare-scale"
                            perspective={1000}
                            glareEnable={true}
                            glareMaxOpacity={0.45}
                            scale={1.01}>
                            <div className="inner-element flex flex-col h-full justify-between">
                              <Image className='w-full h-[220px] rounded-xl' width={100} height={100} src={project?.image} alt={project?.projectName}></Image>
                              <h2 className='text-2xl font-medium text-[#F8F8F8] capitalize'>{project?.projectName}</h2>
                              <p className='text-[#A3B3C2] text-sm'>{project?.details}</p>
                              <p className='flex justify-center gap-2 items-center'>{project?.features.map(item =>
                                <span key={item} className='bg-blue-300 rounded-md px-2'>{item}</span>
                              )}</p>
                              <div className='mt-2 flex justify-between'>
                                <a className='border border-white/70 p-2 rounded-full bg-[#00F5A0] hover:bg-transparent hover:scale-[102%] transition-all duration-200' href={project?.githubLink} target='_blank'>
                                    <VscGithubAlt className='text-[22px] text-white'></VscGithubAlt>
                                </a>
                                <a className='border border-white/70 p-2 rounded-full bg-[#00F5A0] hover:bg-transparent hover:scale-[102%] transition-all duration-200' href={project?.previewLink} target='_blank'>
                                    <LuCircleArrowOutUpRight className='text-[22px] text-white'></LuCircleArrowOutUpRight>
                                </a>
                              </div>
                            </div>
                        </Tilt>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;
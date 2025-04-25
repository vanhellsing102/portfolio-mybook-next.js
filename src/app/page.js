import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Github from '@/components/Github';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const MainPage = () => {
  return (
    <div className='space-y-20'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Github></Github>
      <Experience></Experience>
      <Education></Education>
    </div>
  );
};

export default MainPage;

import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Github from '@/components/Github';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';

const MainPage = () => {
  return (
    <div className='space-y-20'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Github></Github>
      <Stats></Stats>
      <Experience></Experience>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default MainPage;

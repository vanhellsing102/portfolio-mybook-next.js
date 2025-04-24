import About from '@/components/About';
import Experience from '@/components/Experience';
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
      <Experience></Experience>
    </div>
  );
};

export default MainPage;

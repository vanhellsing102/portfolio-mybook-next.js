import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

const MainPage = () => {
  return (
    <div className='space-y-12'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
};

export default MainPage;

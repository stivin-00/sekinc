import React from 'react'
import Hero from '../../Hero';
import Cards from '../Cards';
import Benefits from '../Benefits';
import Testimonials from '../Testimonials';
import Fac from '../fac/Fac';
import Contact from '../Contact';
import { useGlobalContext } from '../../context';






function Home() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
    <div onMouseOver={closeSubmenu}  >
      <Hero/> 
      <Cards /> 
      <Benefits /> 
      <Testimonials />
      <Fac />
      <Contact />
      </div>
    </>
  );
}

export default Home;
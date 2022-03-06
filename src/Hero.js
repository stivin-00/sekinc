import React from 'react';
import phoneImg from './images/pair.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Creating Software <br />
            for Everyone
          </h1>
          <p>
          We develop sofwares(mobile-apps, ecommerce-webapps, data-management, AI, portfolios and more for individuals, companies, schools, government, socials etc).
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


import data from './data';
import "./Testimonial.css"

 const Testimonials = () => {

    // eslint-disable-next-line no-unused-vars
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);
  
    useEffect(() => {
      const lastIndex = people.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, people]);
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);
    return (
        <div>
             <section className="sections">
      <div className="titles">
        <h2>
         Testimonials
        </h2>
      </div>
      <div className="section-centers">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <div className="xx">
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-imgs" />
              <h4>{name}</h4>
              <p className="titles">{title}</p>
              <p className="texts">{quote}</p>
              
            </article>
            </div>
          );
        })}
        <button className="prevs" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="nexts" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>

        </div>
    )
}

export default Testimonials

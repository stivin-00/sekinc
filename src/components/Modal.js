import { useSpring, animated } from 'react-spring';
import React, { useRef, useEffect, useCallback } from 'react';
import "./Modal.css"

export const Modal = ({ showModal, setShowModal }) => {


    const modalRef = useRef();

    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
    return (
        <>
                  {showModal ? (
                 <section className="contact-sectionj" onClick={closeModal} >
                     <animated.div style={animation}>
                 <div class="containerj" showModal={showModal} >
                      <h2>Contact Us</h2>
                      <div className="closebut" onClick={() => setShowModal(prev => !prev)}><i className="fas fa-times"></i></div>
                    <p>Email us and keep upto date with our latest news</p>
                   <div class="contact-formj">
      
                        
                     <div>
                         <div className="breake">
                       <i class="fa fa-map-marker"></i><span class="form-infoj"> Jaja mall University of lagos Nigeria</span><br/>
                       </div>
                       <div className="breake">
                       <i class="fa fa-phone" > </i><span class="form-infoj">  +92 00034567890</span><br/>
                       </div>
                       <div className="breake">
                       <i class="fa fa-envelope"></i><span class="form-infoj">  JhonDoe12@Gmail.com</span>
                       </div>
                       <div className="breake">
                       <i class="fab fa-facebook"></i><span class="form-infoj">  JhonDoe12@Gmail.com</span>
                       </div>
                       <div className="breake">
                       <i class="fab fa-instagram"></i><span class="form-infoj">  JhonDoe12@Gmail.com</span>
                       </div>
                       <div className="breake">
                       <i class="fab fa-whatsapp"></i><span class="form-infoj">  JhonDoe12@Gmail.com</span>
                       </div>
                     </div>
                     
                 
                   </div>
                 </div>
                 </animated.div>
               </section>
      ) : null}
        </>
    )
}
export default Modal;

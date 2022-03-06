import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <>
        
           <section className="contact-us"  >
               <div className="contact-me">
    <div className="container headings text-center">
        <h3 className="text-center text-weight-bold ">CONTACT US</h3>  
        <p className="text-capitalize pt-1">we are here to help you answer any question you might have we look forward to haering from you 😍</p>  
    </div>

    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
                <form>
                    <div className="form-group">
                      <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username" required autocomplete="off"/>
                     </div>
                     
                        <div className="form-group">
                          
                          <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required autocomplete="off"/>
                         </div>
                         
                            <div class="form-group">
                              <input type="number" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="phone" required autocomplete="off"/>
                             </div>
                            
                             <div class="form-group">
                                <textarea className="form-control" id="comment" rows="4" placeholder="enter your message"></textarea>
                              </div>
                     
                 <div class="d-flex justify-content-center form-button">
                    <button type="submit" className=" btn-primary">Submit</button>
                </div>
                  </form>
            </div>
        </div>
    </div> 
    </div>

    </section>
    
        </>
    )
}

export default Contact;

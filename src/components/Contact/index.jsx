import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import Phone from  "../../img/phone.png"
import Email from  "../../img/email.png"
import Addres from  "../../img/addres.png"
import "./style.css"

function Contact() {
    const form = useRef()
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_vwcovl8', 'template_dzm3i9o', form.current, 'Gi67JK9FTgfA5fLEI')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        };

  return (
    <div className='c'>
    <div className="c-bg"></div>
        <div className="c-wrapper">
           <div className="c-left">
                <h1 className="c-title">Ok, let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                       <img src={Phone} alt="" className="c-icon" /> +54 9 3624545529
                    </div>
               </div>
               <div className="c-info">
                   <div className="c-info-item">
                      <img src={Email} alt="" className="c-icon" /> brlisbo@gmail.com
                  </div>
                </div>
               <div className="c-info">
                    <div className="c-info-item">
                       <img src={Addres} alt="" className="c-icon" /> 275 La Cangaye - Resistencia - Chaco - Argentina
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="c-desc">
                    <b>Hello! Tell me your story.</b><p>Let's create our contact! Here a freelancer will always be available for a good project! Thanks for the interest!!</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='Name' name="user_name"/>
                        <input type="text" placeholder='Subject' name="user_subject"/>                    
                        <input type="text" placeholder='Email' name="user_email"/>
                        <textarea rows="5" placeholder='Message' name='message'></textarea>
                        <button type="submit" value="Send">Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>

            </div>
        </div>
  </div>
    
  )
}

export default Contact
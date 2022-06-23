import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import Phone from  "../../img/phone.png"
import Email from  "../../img/email.png"
import Addres from  "../../img/addres.png"
import Linkedin from "../../img/in.png"
import Github from "../../img/gthub.png"

import "./style.css"
import { ThemeContext } from '../../context'

function Contact() {
    const form = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_7x2tbot', 'template_dzm3i9o', form.current, 'Gi67JK9FTgfA5fLEI')
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
                <h1 className="c-title">Let's discuss your project ...</h1>
                <div claossName="c-inf">
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
                <div className="c-info">
                    <div className="c-info-item">
                       <img src={Linkedin} alt="" className="c-icon" /><a href="https://linkedin.com/in/bruno--lisboa">https://linkedin.com/in/bruno--lisboa</a>       
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                       <img src={Github} alt="" className="c-icon" /> <a href="https://github.com/br1lisboa"> https://github.com/br1lisboa </a>    
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="c-desc">
                    <b>Hello! Tell me your story.</b><p>Let's create our contact! Here a freelancer will always be available for a good project! Thanks for the interest!!</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject"/>                    
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'></textarea>
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
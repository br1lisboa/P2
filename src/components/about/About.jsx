import React from 'react'
import About1 from '../../img/img-about1.jpg'
import logoJS from '../../img/logoJS.png'
import logoREACT from '../../img/logoREACT.png'
import logoBTS from '../../img/logoBTS.png'
import logoCSS from '../../img/logoCSS.png'
import logoGIT from '../../img/logoGIT.png'
import logoGITHUB from '../../img/logoGITHUB.png'
import logoGITKRAKEN from '../../img/logoGITKRAKEN.png'
import logoHTML from '../../img/logoHTML.png'
import logoTAILWIND from '../../img/logoTAILWIND.png'
import logoSASS from '../../img/logoSASS.png'
import './about.css'

function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg">
            </div>
            <div className="a-card">
                <img src={About1} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <div className="a-right-top">
                <h1 className="i-title">Skills</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat mollitia inventore ipsa ab, nobis, cupiditate praesentium nesciunt doloremque amet in at assumenda! Voluptatum reiciendis itaque, doloremque sed ducimus ex enim.
                </p>
                <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
            </div>
            <div className="a-right-bot">
                <div className="a-award">
                    <img src={logoJS} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoREACT} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoHTML} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoCSS} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoSASS} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoBTS} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoTAILWIND} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoGIT} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoGITKRAKEN} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={logoGITHUB} alt="" className="a-award-img" />
                </div>
            </div>
        </div>   
    </div>
  )
}

export default About
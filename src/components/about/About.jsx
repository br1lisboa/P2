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
                <div className="a-right-title">
                    <h1 className="i-title-b">Hard Skills</h1>
                    <p className="a-sub">
                    Among my current knowledge I highlight, REACT JS, JavaScript, CSS, SASS, HTML; Version control technologies like GIT; GITHUB, GitKraken; Set of tools like BOOTSTRAP, TAILWIND; Tools like WORDPRESS and WooCommerce..
                    </p>
                </div>
                {/* <div className="i-title-b">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">ReactJS</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">HTML</div>
                            <div className="i-title-item">CSS</div>
                            <div className="i-title-item">SASS</div>
                            <div className="i-title-item">BootStrap</div>
                            <div className="i-title-item">TailWind</div>
                            <div className="i-title-item">Git</div>
                            <div className="i-title-item">GitHub</div>
                            <div className="i-title-item">GitKraken</div>
                        </div>
                </div> */}
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
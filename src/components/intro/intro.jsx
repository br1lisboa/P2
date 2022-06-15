import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello!, My name is</h2>
                    <h1 className="i-name">Bruno Lisboa</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        ACA VA LA DESCRIPCION TUYA Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem necessitatibus quaerat nostrum sit, sequi distinctio aliquam a hic labore, veritatis exercitationem soluta sint eius eos numquam totam commodi voluptate.
                    </p>
                </div>
                <svg width="75" height="75" className="i-scroll" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.99 64"><defs></defs><title>Asset 13</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M47.09,19.72a23.38,23.38,0,0,0-46.19,0,84.16,84.16,0,0,0,0,24.55,23.38,23.38,0,0,0,46.19,0A84.16,84.16,0,0,0,47.09,19.72ZM6.18,20.5a18.05,18.05,0,0,1,35.64,0,79.22,79.22,0,0,1,.37,19.58c-.09,0-.17,0-.26,0a64.35,64.35,0,0,1-35.87,0c-.09,0-.17,0-.26,0A78.73,78.73,0,0,1,6.18,20.5ZM24,58.67A18.08,18.08,0,0,1,6.68,45.75,69.76,69.76,0,0,0,24,48a69.75,69.75,0,0,0,17.31-2.24A18.06,18.06,0,0,1,24,58.67Z"/><path class="cls-1" d="M24,29.33a2.66,2.66,0,0,0,2.66-2.66V16a2.67,2.67,0,1,0-5.33,0V26.67A2.66,2.66,0,0,0,24,29.33Z"/></g></g></svg>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
            
        </div>
    )
}

export default Intro
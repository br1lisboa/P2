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
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
            
        </div>
    )
}

export default Intro
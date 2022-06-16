import React from 'react'
import About1 from '../../img/img-about1.jpg'
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
            <h1 className="i-title">About Me</h1>
            <p className="a-sub">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat mollitia inventore ipsa ab, nobis, cupiditate praesentium nesciunt doloremque amet in at assumenda! Voluptatum reiciendis itaque, doloremque sed ducimus ex enim.
            </p>
            <p className="a-des">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quod quaerat temporibus nulla excepturi fugiat animi! Sapiente, similique consequatur quisquam sed provident minus illo, illum beatae sunt impedit fugit quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere dolorum, eveniet ullam minima sit, quidem optio impedit, aperiam mollitia perferendis id. Perspiciatis animi esse eum molestiae est minus suscipit!
            </p>
        </div>
        <div className="a-award">
            <img src="" alt="" className="a-award-img" />
        </div>
    </div>
  )
}

export default About
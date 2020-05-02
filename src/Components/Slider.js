import React from 'react'
import './Slider.css'

const Slider = (props) => {
    return (
        <div className="slider" onClick={()=>props.slide()}>
              <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#highlight">ABOUT</a></li>
                    <li><a href="#courses">COURSES</a></li>
                    <li><a href="#placement">PLACEMENT</a></li>
                    <li><a href="#footer">CONTACT</a></li>
                </ul>
                {props.children}
        </div>
    )
}

export default Slider

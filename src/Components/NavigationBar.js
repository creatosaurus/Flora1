import React from 'react'
import './NavigationBar.css'

const NavigationBar = ({slide}) => {
    return (
        <header id="home">
            <nav>
                <div className="menu" onClick={()=>slide()}>
                <i className="fa fa-bars"></i>
                </div>

                <div className="logo">
                    <div className="logo-image"></div>
                    <div className="content">
                        <div>FLORA INSTITUTE OF TECHNOLOGY</div> 
                        <span>lorem ipsum</span>
                    </div>
                </div>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#highlight">ABOUT</a></li>
                    <li><a href="#courses">COURSES</a></li>
                    <li><a href="#placement">PLACEMENT</a></li>
                    <li><a href="#footer">CONTACT</a></li>
                </ul>
            </nav>
            <div className="header-image">
                <div className="content">
                    <div className="first-block">RANKED AMONGEST</div>
                    <div className="second-block">TOP COLLAGES IN MAHARASHTRA</div>
                    <div className="third-block">FOR ACADENIC EXCLLENCE</div>
                </div>
                <div className="content2">
                    <div className="first-block">Admission open for B.E 2020-21</div>
                    <div className="second-block">ENQUIRY NOW</div>
                </div>
            </div>
        </header>
    )
}

export default React.memo(NavigationBar)

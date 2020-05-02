import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook-3.svg'
import instagram from '../assets/instagram-2-1.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin-icon.svg'
import copyright from '../assets/copyright.svg'


const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div class="grid">
                    <div>
                        <strong>ABOUT FLORA INSTITUTE</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam minima tempora blanditiis
                            sint!
                            Nisi voluptas fugit iste velit, sequi amet modi impedit numquam, debitis, quisquam maxime accusamus
                    doloremque iure</p>
                        <div class="icons">
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                    <div>
                        <strong>ABOUT FLORA INSTITUTE</strong>
                        <div class="link">
                            <span><a href="./index.html">Home</a></span>
                            <span><a href="./index.html">Admission</a></span>
                            <span><a href="./index.html">Coureses</a></span>
                            <span><a href="./index.html">Achivements</a></span>
                            <span><a href="./index.html">Gallary</a></span>
                        </div>

                    </div>

                    <div>
                        <strong>GET IN TOUCH</strong>
                        <div class="getintouch">
                            <p>Flora Institiute of Technology</p>
                            <p>A/P Khopi near Khedshivapur TollPlaza Off Pune-Satara Highway TQ Bhor Ta: Bhor Dist: Pune-412205</p>
                            <p>Contact no- 020-24336601</p>
                        </div>
                    </div>

                    <div>
                        <strong>REACH US OUT</strong>
                        <div class="reachus" />
                    </div>

                </div>
            </footer>
            <div class="copyright">
                <img src={copyright} alt="copyright" />
                    <strong>Flora institiute of technology 2020</strong>
        </div>
        </React.Fragment>
            )
        }
        
        export default Footer

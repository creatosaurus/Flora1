import React from 'react'
import './Technology.css'

const Technology = () => {
    return (
        <section className="section3">
            <h1>Flora Institiute of Technology</h1>
            <div className='logo'>
                <div className="logo1">
                    <strong>Architecture</strong>
                </div>
               
                <div className="logo2">
                    <strong>Engineering</strong>
                </div>
          
                <div className="logo3">
                    <strong>Architecture</strong>
                </div>

                <div className="logo4">
                    <strong>School</strong>
                </div>
                
                <div className="logo5">
                    <strong>Architecture</strong>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Technology)

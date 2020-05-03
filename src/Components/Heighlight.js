import React from 'react'
import medal from '../assets/medal.svg'
import settings from '../assets/settings.svg'
import work from '../assets/work.svg'
import './Heighlight.css'


const Heighlight = () => {
    return (
        <section className="highlight" id="highlight">
            <div className="head">HIGHLIGHT</div>
            <div className="card-section">
                <div className="card">
                    <div className="box">
                        <img src={medal} alt="medal" />
                    </div>
                    <strong>Center Of Excellence</strong>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Excepturi eveniet vero aperiam dolores aliquam dolor! Magni impedit minus numquam asperiores
                        voluptates.
                        Qui nemo nobis voluptas facilis voluptatum quis reiciendis saepe.
                </p>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={settings} alt="settings" />
                    </div>
                    <strong>Center Of Excellence</strong>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Excepturi eveniet vero aperiam dolores aliquam dolor! Magni impedit minus numquam asperiores
                        voluptates.
                        Qui nemo nobis voluptas facilis voluptatum quis reiciendis saepe.
                </p>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={work} alt="work" />
                    </div>
                    <strong>Center Of Excellence</strong>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Excepturi eveniet vero aperiam dolores aliquam dolor! Magni impedit minus numquam asperiores
                        voluptates.
                        Qui nemo nobis voluptas facilis voluptatum quis reiciendis saepe.
                </p>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Heighlight)

import React from 'react'
import './BackPress.css'

const BackPress = ({slide}) => {

    return (
        <div className="backpress" onClick={()=>slide()}>
            
        </div>
    )
}

export default React.memo(BackPress)

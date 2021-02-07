import React from 'react'
import Profile from './Profile/Profile'
import './Body.css'
import Stream from './Stream/Stream'

const Body = () => {
    return (
        <div className="body">
            <div className="body__left">
                <Stream/>
                <Profile/>
            </div>
            <div className="body_rightPlaceHolder"></div>
        </div>
    )
}

export default Body

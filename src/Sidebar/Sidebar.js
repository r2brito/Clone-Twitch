import React from 'react'
import Channel from './Channel/Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
            <h5>FOLLWED CHANNELS</h5>
            <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/979e9e07-675a-473d-b580-e756f0239adf-profile_image-70x70.png'
                name='r2brito'
                followers='820k'/>
            <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/979e9e07-675a-473d-b580-e756f0239adf-profile_image-70x70.png'
                name='r2brito'
                followers='820k'/>
            <h5>RECOMMENDED CHANNELS</h5>
            <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/979e9e07-675a-473d-b580-e756f0239adf-profile_image-70x70.png'
                name='r2brito'
                followers='820k'/>
                
            <p className='sidebar__topShowMore'>Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder='Search to Add Friends'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar



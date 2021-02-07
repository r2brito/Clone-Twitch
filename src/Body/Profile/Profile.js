import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem/RecentItem'

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile__topLeft">
            <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/979e9e07-675a-473d-b580-e756f0239adf-profile_image-70x70.png'/>
            <div className="profile__topLeftDetails">
                <h1>r2brito</h1>
                <h3>820k followers</h3>
            </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/wUvVw-Qhgrc'}
                        title={'Clone Twitch'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/wUvVw-Qhgrc'}
                        title={'Clone Twitch'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/wUvVw-Qhgrc'}
                        title={'Clone Twitch'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/wUvVw-Qhgrc'}
                        title={'Clone Twitch'}
                    />
                </div>

                <div className="profile__categories">
                    <h2>r2brito recently stream Categories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-static/404_boxart-285x380.jpg"/>
                    <h3>Science & Technology</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile

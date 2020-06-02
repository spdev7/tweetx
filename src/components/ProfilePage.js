import React from 'react'
import UserCard from './UserCard'
import TabContainerNew from './TabContainerNew'

const ProfilePage = () => {
    return (
        <div className="feed_new">
            <UserCard page={"profile"}/>
            <TabContainerNew/>
        </div>
    )
}

export default ProfilePage

import React from 'react'
import UserCard from './UserCard'
import TabContainerNew from './TabContainerNew'

const item = {
    id: 1,
    name: "Saurav Prakash",
    tweet: "What a sunny day",
    time: "12",
    followers: [],
  }

const ProfilePage = () => {
    return (
        <div className="feed_new">
            <UserCard data={item} page={"profile"}/>
            <TabContainerNew/>
        </div>
    )
}

export default ProfilePage

import React from 'react'
import Card from './Card';
import UserCard from './UserCard';
import {connect} from 'react-redux'

const UserComponent = (props) => {
    const { userpost } = props;
    return (
        <div style={{maxWidth:"600px",margin:"0 auto"}}>
           {
          userpost.map((item) => {
          return  item && item.tweets && item.tweets.length > 0 && item.tweets.map((data) => <UserCard page={"user"} data={data}/>)}        
           )}
      {/* xpost.map((item) => <Card data={item}/>) */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userpost: state.user.userpost
    }
}

export default connect(mapStateToProps,null)(UserComponent)

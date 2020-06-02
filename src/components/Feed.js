import {compose} from 'redux'
import React from 'react'
import Write from './Write'
import Card from './Card';
import UserCard from './UserCard';
import {firestoreConnect} from 'react-redux-firebase'
import { connect } from 'react-redux'

const Feed = (props) => {
    const {post} = props;
    return (
        <div className="feed_new">
            <Write />
            {post.map((item) => <Card data={item}/>)}
            {/* 
            <UserCard/> */}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.firestore.ordered.users
//     }
// }


// export default compose( 
//     connect(mapStateToProps),
//     firestoreConnect([
//         {
//             collections:'users'
//         }
//     ])
// )(Feed)
const mapStateToProps = (state) => {
    return {
        post: state.user.post
    }
}
export default connect(mapStateToProps,null)(Feed)
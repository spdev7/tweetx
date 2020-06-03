import { compose } from "redux";
import React from "react";
import Write from "./Write";
import Card from "./Card";
import UserCard from "./UserCard";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";

const Feed = (props) => {
  const { xpost } = props;
  return (
    <div className="feed_new">
      <Write />
      
     { xpost.map((item) => <Card data={item}/>)}
    </div>
  );
};

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
    xpost: state.user.xpost,
  };
};
export default connect(mapStateToProps, null)(Feed);

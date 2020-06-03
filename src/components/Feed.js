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
      {
        console.log(xpost.length == 0 || xpost[xpost.length-1] == null)
      }
      {
        xpost.length == 0 || xpost[xpost.length-1] == null && (<div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column "}}>
          <div><h4 style={{color:"grey"}}>Follow some user</h4></div>
          <div><h3 style={{color:"#e83e8c"}}>0 Posts</h3></div>
        </div>)
      }
      {
          xpost && xpost.map((item) => {
          return  item && item.tweets && item.tweets.length > 0 && item.tweets.map((data) => <Card data={data}/>)}        
           )}
      {/* xpost.map((item) => <Card data={item}/>) */}
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

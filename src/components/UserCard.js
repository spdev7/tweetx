import React, { useState } from "react";
import { Button } from "reactstrap";
import {connect} from "react-redux"
import {follow_user} from "../actions/index"

const UserCard = (props) => {
  const [active, setActive] = useState(false);
  const [follow, setFollowing] = useState("Follow");

  const handleFollow = (e) => {
    if (active == false) {
      setFollowing("Following");
      setActive(true);
    } else {
      setFollowing("Follow");
      setActive(false);
    }
    props.follow_user(props.data.name);
  };
  const { name,totaltweets} = props.data;
  return (
    <div className="card_new">
      <div className="card-profile">
        <img />
      </div>
      <div className="card-right-user">
        <div
          className={
            props.page === "profile" ? "card-name-profile" : "card-name"
          }
        >
          <div style={{display:"flex",flexDirection:"column"}}>
        {props.page === "user" && <span><strong>{name}</strong></span>}
        {props.page === "user" && <span>{totaltweets} posts</span>}
        {props.page !== "user" && <h3>{name}</h3>}
          </div>
          {props.page === "profile" && (
            <div className="card-sub-text">
              <div>Posts: 511</div>
              <div>Followers: 511</div>
              <div>Following: 511</div>
            </div>
          )}
        </div>
        {props.page != "profile" && (
          <div className="card-text-user">
            <Button outline color="danger" onClick={handleFollow}>
              {props.following === "following" ? "Following" : follow}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow_user: (name) => dispatch(follow_user(name)),
  }
}
export default connect(null,mapDispatchToProps)(UserCard);

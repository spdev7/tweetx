import React, { useState } from "react";
import { Button } from "reactstrap";

const UserCard = (props) => {
  const [active, setActive] = useState(false);
  const [follow, setFollowing] = useState("Follow");

  const handleFollow = () => {
    if (active == false) {
      setFollowing("Following");
      setActive(true);
    } else {
      setFollowing("Follow");
      setActive(false);
    }
  };

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
          <div>
            <h2>Arjun Reddy</h2>
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
              {follow}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;

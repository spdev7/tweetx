import React from "react";
import { Button } from "reactstrap";

const UserCard = (props) => {
  return (
    <div className="card_new">
      <div className="card-profile">
      <img />
      </div>
      <div className="card-right-user">
            <div className={props.page == "profile" ? "card-name-profile":"card-name"}>
          <div><h2>Arjun Reddy</h2></div>
          {props.page == "profile" && (<div className="card-sub-text">
              <div>Posts: 511</div>
              <div>Followers: 511</div>
              <div>Following: 511</div>
          </div>)}
        </div>
        {props.page != "profile" && (<div className="card-text-user">
        <Button color="danger">Follow</Button>
        </div>)
        }      
      </div>
    </div>
  );
};

export default UserCard;

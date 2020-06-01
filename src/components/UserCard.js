import React from "react";
import { Button } from "reactstrap";

const UserCard = () => {
  return (
    <div className="card_new">
      <div className="card-profile">
      <img />
      </div>
      <div className="card-right-user">
        <div className="card-name">
          <div><h2>Arjun Reddy</h2></div>
        </div>
        <div className="card-text-user">
        <Button color="danger">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import React from "react";

const Card = () => {
  return (
    <div className="card_new">
      <div className="card-profile">
      <img />
      </div>
      <div className="card-right">
        <div className="card-name">
          <div><h2>Arjun Reddy</h2></div>
          <div style={{display:"flex",alignSelf:"flex-end"}}><span>10 minutes</span></div>
        </div>
        <div className="card-text">
        <span>Lorem Ipsum is simply dummy text of the printing and </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

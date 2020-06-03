import React from "react";

const Card = (props) => {
  console.log('sdfas')
  console.log(props)
  const {name,tweet,time} = props.data

  return (
    <div className="card_new">
      <div className="card-profile">
      <img />
      </div>
      <div className="card-right">
        <div className="card-name">
        <div><span style={{fontSize:"1.2rem"}}><strong>{name}</strong></span></div>
        <div style={{display:"flex",alignSelf:"flex-end"}}><span style={{fontSize:"0.7rem",opacity:0.5}}>{time} minutes</span></div>
        </div>
        <div className="card-text">
        <span>{tweet}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
  
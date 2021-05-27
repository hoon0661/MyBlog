import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }} className="mx-auto">
      <img src="" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.content}</p>
        <p className="card-text">
          <small className="text-muted text-right">{props.item.date}</small>
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

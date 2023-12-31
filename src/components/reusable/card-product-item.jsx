import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({
  source,
  title,
  price,
  category,
  brand,
  toPage,
  onStarToggle,
  icon,
}) => {
  return (
    <div
      className="card card-body d-flex justify-content-between align-items-center text-dark"
      style={{ width: "400px", height: "550px" }}
    >
      <div className="align-self-end " onClick={onStarToggle}>
        {icon}
      </div>
      <Link to={toPage}>
        <figure className="m-0 rounded-circle border border-1">
          <img
            src={source}
            style={{ width: "250px", height: "250px" }}
            className="rounded-circle border border-1 shadow"
          />
        </figure>
      </Link>
      <div className="p-2 d-flex flex-column justify-content-center align-items-center gap-2 w-100">
        <h2>{title}</h2>
        <span className="bg-dark text-light p-1 rounded-1 px-2">{`Price:  ${price}$`}</span>
        <div className="d-flex justify-content-between align-items-center w-100 pt-3">
          <span>{category}</span>
          <span
            className="overflow-hidden text-primary"
            style={{ height: "35px" }}
          >
            {brand}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavigateSection = ({ searchProducts, onChange, searchValue }) => {
  return (
    <div className="Nav">
      <nav className="bg-primary bg-opacity-75 d-flex justify-content-center align-items-center p-3 gap-5 shadow-lg">
        <span id="logo" className="fs-2 fw-bold">
          LOGO
        </span>

        <form
          onSubmit={searchProducts}
          className="d-flex align-items-center justify-content-center w-100"
        >
          <input
            type="search"
            placeholder="Search For What You Want"
            className="form-control form-control-lg rounded-1"
            onChange={onChange}
            defaultValue={searchValue}
          />
          <button
            className="btn btn-light rounded-1 py-2"
            type="button"
            onClick={searchProducts}
          >
            <BsSearch size={30} />
          </button>
        </form>
        <Link to={"/not-found"}>
          <img
            id="profile"
            src={require("../../images/anonymous-avatar-icon-25.jpg")}
            style={{ width: 60 + "px", height: 60 + "px" }}
            className="rounded-circle"
          />
        </Link>
      </nav>
    </div>
  );
};

export default NavigateSection;

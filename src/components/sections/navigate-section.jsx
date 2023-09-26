import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavigateSection = ({ searchProducts, onChange, searchValue }) => {
  let favouriteCount = useSelector((state) => state.favourite.list.length);
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

        <Link
          className="fs-3 text-light text-decoration-none rounded-1 p-2"
          to={"/products-favourite"}
        >
          <span>Favourite</span>
          <span className="text-warning ps-2">{favouriteCount}</span>
        </Link>
        <Link to={"/not-found"}>
          <img
            id="profile"
            src={require("../../images/anonymous-avatar-icon-25.jpg")}
            style={{ width: "60px", height: "60px" }}
            className="rounded-circle"
          />
        </Link>
      </nav>
    </div>
  );
};

export default NavigateSection;

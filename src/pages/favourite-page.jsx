import React, { useEffect, useState } from "react";
import CardItem from "../components/reusable/card-product-item";
import NavigateSection from "../components/sections/navigate-section";
import { InstanceAPI } from "../axios-instanse";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

// import { IconName,FaCcPaypal } from "react-icons/fa";

const FavouritePage = () => {
  let favouriteList = [1, 2, 3, 4];
  function onStarToggle(event) {
    console.log(event.target);
    event.target.classList.toggle("text-info");
    console.log("star");
  }

  return (
    <div className=" min-vh-100 min-vw-100 text-center  pb-5">
      {/* <NavigateSection
        searchProducts={(event) => searchProducts(event)}
        onChange={(event) => onSearchInputChange(event)}
        searchValue={searchInput}
      /> */}

      <h2 className="p-5 fs-1 fw-bolder page-title">Products & Items</h2>

      {favouriteList.length != 0 ? (
        <div className="container gap-3 d-flex flex-wrap justify-content-center align-items-center ">
          {favouriteList.map((product) => (
            <CardItem
              key={"product.id"}
              source={"product.thumbnail"}
              title={"product.title"}
              price={"product.price"}
              category={"product.category"}
              brand={"product.brand"}
              id={"product.id"}
              toPage={`/product-detail/${product.id}`}
              onStarToggle={(event) => onStarToggle(event)}
              icon={<MdDelete size={40} className="text-danger" />}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-light h-100">Products Not Found</h2>
      )}
    </div>
  );
};

export default FavouritePage;

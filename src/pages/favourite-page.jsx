import React, { useEffect, useState } from "react";
import CardItem from "../components/reusable/card-product-item";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeProduct } from "../reducers/favourite-slice";
import { Link } from "react-router-dom";

const FavouritePage = () => {
  // ------------------------------ use selector ------------------------------//
  let favouriteList = useSelector((state) => state.favourite.list);

  // ------------------------------ use dispatch ------------------------------//
  let dispatchAction = useDispatch();

  // ------------------------------ item remove ------------------------------//
  function onItemRemove(product) {
    dispatchAction(removeProduct(product));
  }

  return (
    <div className=" min-vh-100 min-vw-100 text-center  pb-5">
      <Link to={'/'}>
        <span className="btn btn-outline-light p-2 px-5 m-3" >Back</span>
      </Link>
      <h2 className="p-5 fs-1 fw-bolder page-title">Favourite Products</h2>

      {favouriteList.length != 0 ? (
        <div className="container gap-3 d-flex flex-wrap justify-content-center align-items-center ">
          {favouriteList.map((product) => (
            <CardItem
              key={product.id}
              source={product.thumbnail}
              title={product.title}
              price={product.price}
              category={product.category}
              brand={product.brand}
              toPage={`/product-detail/${product.id}`}
              onStarToggle={() => onItemRemove(product)}
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

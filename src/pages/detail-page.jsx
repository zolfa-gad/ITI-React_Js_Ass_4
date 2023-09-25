import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InstanceAPI } from "../axios-instanse";

const ProductDetailPage = () => {
  let test = [1, 2, 3];
  let [productItem, setProductItem] = useState({
    title: "",
    images: [],
    thumbnail: "",
    description: "",
    price: "",
  });
  const { productID } = useParams();

  let navigateToPage = useNavigate();

  useEffect(() => {
    // if (productItem !=undefined)
    getProductFromAPI();
    console.log(productItem, "item");
  }, []);

  function getProductFromAPI() {
    InstanceAPI.get(`/product/${productID}`)
      .then((response) => {
        console.log(response.data);
        setProductItem(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigateToPage("/not-found", { replace: true });
      });
  }

  return productItem ? (
    <div className="Detail text-center pb-5 ">
      <h1 className="page-title p-5">
        {/* {productItem.title[0].toUpperCase() + productItem.title.slice(1)} */}
        {productItem.title}
      </h1>
      <div className="container">
        <div className="w-100  px-2">
          <img
            // height={"500px"}
            src={productItem.thumbnail}
            className="w-100 rounded-2 border border-1"
          />
        </div>
        <div className="d-flex flex-wrap py-2">
          {productItem.images.map((image, index) => (
            <div
              className={
                productItem.images.length % 2 == 0
                  ? "p-2 col-lg-3"
                  : "p-2 col-lg-4"
              }
            >
              <img
                key={`img-${index}`}
                src={image}
                // style={{ width: 318 + "px", }}
                className=" rounded-2 border border-2 w-100 h-100 "
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2 py-3">
          <span className="bg-danger text-light p-2 px-3 rounded-1">{`Price: ${productItem.price}$`}</span>
          <span className="bg-primary text-light p-2 px-3 rounded-1">{`Brand: ${productItem.brand}`}</span>
          <span className="bg-light text-dark p-2 px-3 rounded-1">{`Category: ${productItem.category}`}</span>
        </div>
        <p className="lead py-3">{productItem.description}</p>
      </div>
    </div>
  ) : (
    <span>Loading...</span>
  );
};

export default ProductDetailPage;

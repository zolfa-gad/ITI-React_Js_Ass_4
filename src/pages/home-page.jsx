import React, { useEffect, useState } from "react";
import CardItem from "../components/reusable/card-product-item";
import NavigateSection from "../components/sections/navigate-section";
import { InstanceAPI } from "../axios-instanse";
import { Link, useNavigate } from "react-router-dom";
// import { IconName,FaCcPaypal } from "react-icons/fa";

const ProductsHomePage = ({ searchProducts }) => {
  let test = [1, 2, 3, 4, 5, 6, 7];

  let [search, setCheckSearch] = useState(false);

  let [productsList, setProductsList] = useState([]);
  let [searchInput, setSearchInputValue] = useState("");

  const navigateToPage = useNavigate();

  useEffect(() => {
    getProductsFromAPI();
    console.log(productsList, "products");
    // console.log(productsList.length);
    // if (productsList != undefined) {
    //   console.log(productsList.length);
    // } else {
    //   console.log(productsList.length);
    // }
  }, []);

  useEffect(() => {
    if (searchInput) {
      setCheckSearch(true);
      console.log(search);
    } else {
      setCheckSearch(false);
      console.log(search);
    }
  }, [searchInput]);

  function getProductsFromAPI() {
    InstanceAPI.get("/products")
      .then((response) => {
        console.log(response.data, "response");
        setProductsList(response.data.products);
      })
      .catch((error) => {
        console.log(error);
        navigateToPage("not-found");
      });
  }

  function onSearchInputChange(event) {
    console.log(event.target.value);
    setSearchInputValue(event.target.value);
  }

  function searchProducts(event, self) {
    event.preventDefault();
    console.log(event.target);
    console.log(self);

    InstanceAPI.get(`/products/search?q=${searchInput}`)
      .then((response) => {
        console.log(response.data, "response");
        setProductsList(response.data.products);
        // setCheckSearch(true);
        // console.log(productsList.length);
      })
      .catch((error) => {
        console.log(error);
        navigateToPage("not-found");
      });
  }

  return (
    <div className=" min-vh-100 min-vw-100 text-center  pb-5">
      <NavigateSection
        searchProducts={(event) => searchProducts(event)}
        onChange={(event) => onSearchInputChange(event)}
        searchValue={searchInput}
      />
      <h2 className="p-5 fs-1 fw-bolder page-title">Products & Items</h2>

      {productsList ? (
        <div className="container gap-3 d-flex flex-wrap justify-content-center align-items-center ">
          {productsList.map((product) => (
            <Link
              key={product.id}
              to={`/product-detail/${product.id}`}
              className="text-decoration-none text-dark"
            >
              <CardItem
                key={product.id}
                source={product.thumbnail}
                title={product.title}
                price={product.price}
                category={product.category}
                brand={product.brand}
              />
            </Link>
          ))}
        </div>
      ) :  search ? (
        <h2 className="text-light h-100">Products Not Found</h2>
      ) : (
        <h2 className="text-light h-100">Loading...</h2>
      )}
    </div>
  );
};

export default ProductsHomePage;

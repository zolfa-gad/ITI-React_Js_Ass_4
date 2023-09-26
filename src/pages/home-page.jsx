import React, { useEffect, useState } from "react";
import CardItem from "../components/reusable/card-product-item";
import NavigateSection from "../components/sections/navigate-section";
import { InstanceAPI } from "../axios-instanse";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { addProduct, removeProduct } from "../reducers/favourite-slice";

const ProductsHomePage = () => {
  // ------------------------------ use state ------------------------------//
  let [isLoading, setIsLoading] = useState(true);
  let [productsList, setProductsList] = useState([]);
  let [searchInput, setSearchInputValue] = useState("");

  // ------------------------------ use navigate ------------------------------//
  const navigateToPage = useNavigate();

  // ------------------------------ use selector ------------------------------//
  let favouriteList = useSelector((state) => state.favourite.list);

  // ------------------------------ use dispatch ------------------------------//
  let dispatchAction = useDispatch();

  // ------------------------------ use effect ------------------------------//
  useEffect(() => {
    getProductsFromAPI();
  }, []);

  // ------------------------------ get products ------------------------------//
  function getProductsFromAPI() {
    InstanceAPI.get("/products")
      .then((response) => {
        console.log(response.data, "response");
        setProductsList(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        navigateToPage("not-found");
      });
  }

  // ------------------------------ search handler ------------------------------//
  function onSearchInputChange(event) {
    setSearchInputValue(event.target.value);
  }

  // ------------------------------ search products ------------------------------//
  function searchProducts(event, self) {
    event.preventDefault();
    setIsLoading(true);
    InstanceAPI.get(`/products/search?q=${searchInput}`)
      .then((response) => {
        console.log(response.data, "response");
        setProductsList(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        navigateToPage("not-found");
      });
  }

  // ------------------------------ on toggle click ------------------------------//
  function onStarToggle(event, product) {
    event.target.classList.toggle("text-warning");

    if (event.target.classList.contains("text-warning")) {
      dispatchAction(addProduct(product));
    } else {
      dispatchAction(removeProduct(product));
    }
  }

  // ------------------------------ is favourite ------------------------------//
  function isFavouriteProduct(product) {
    let result = favouriteList.find(({ id }) => id === product.id);
    if (result === undefined) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className=" min-vh-100 min-vw-100 text-center  pb-5">
      <NavigateSection
        searchProducts={searchProducts}
        onChange={onSearchInputChange}
        searchValue={searchInput}
      />

      <h2 className="p-5 fs-1 fw-bolder page-title">Products & Items</h2>

      {isLoading ? (
        <h2 className="text-light h-100">Loading...</h2>
      ) : productsList.length !== 0 ? (
        <div className="container gap-3 d-flex flex-wrap justify-content-center align-items-center ">
          {productsList.map((product) => (
            <CardItem
              key={product.id}
              source={product.thumbnail}
              title={product.title}
              price={product.price}
              category={product.category}
              brand={product.brand}
              toPage={`/product-detail/${product.id}`}
              onStarToggle={(event) => onStarToggle(event, product)}
              icon={
                <BsFillStarFill
                  size={40}
                  className={
                    isFavouriteProduct(product) ? "text-warning" : "text-dark"
                  }
                />
              }
            />
          ))}
        </div>
      ) : (
        <h2 className="text-light h-100">Products Not Found</h2>
      )}
    </div>
  );
};

export default ProductsHomePage;

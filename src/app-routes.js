import React from "react";
import ProductsHomePage from "./pages/home-page";
import ProductDetailPage from "./pages/detail-page";
import NotFoundPage from "./pages/not-found-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritePage from "./pages/favourite-page";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsHomePage />} />
          <Route
            path="/product-detail/:productID"
            element={<ProductDetailPage />}
          />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/products-favourite" element={<FavouritePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;

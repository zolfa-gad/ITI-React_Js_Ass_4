import React from "react";
import ProductsHomePage from "./pages/home-page";
import ProductDetailPage from "./pages/detail-page";
import NotFoundPage from "./pages/not-found-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsHomePage />} />
          <Route path="/product-detail/:productID" element={<ProductDetailPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;

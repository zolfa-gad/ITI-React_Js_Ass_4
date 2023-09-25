import React from "react";

const NotFoundPage = () => {
  return (
    <div className="NotFound d-flex flex-column justify-content-center align-items-center gap-2">
      <h1 className="fs-1 fw-bolder">404</h1>
      <span className="fs-4">Not Found</span>
      <span className="d-block text-danger">
        The resource requested could not be found in thuis server!!
      </span>
      <p className="lead w-50 text-justify">
        Laborum labore eiusmod commodo minim reprehenderit eu excepteur eu.
        Dolor sit culpa exercitation sit dolore fugiat dolor consequat
        exercitation. Enim labore eu sunt in nostrud proident eiusmod commodo
        sint quis laborum deserunt. Reprehenderit consectetur in anim id sit
        commodo sit voluptate do excepteur cupidatat commodo incididunt.
      </p>
    </div>
  );
};

export default NotFoundPage;

import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAppSelector } from "app/redux/hooks";

const Spinner = () => {
  return <div>loading...</div>;
};

export const App = () => {
  const lan = useAppSelector((state) => state.language);
  useEffect(() => {
    document.querySelector("html").setAttribute("dir", lan.direction);
    document.querySelector("html").setAttribute("lang", lan.name);
    document.querySelector("body").setAttribute("class", lan.font);
  }, [lan]);
  // return (
  //   <div
  //     style={{ height: "100vh" }}
  //     className="w-100 d-flex justify-content-center align-items-center text-primary"
  //   >
  //     COMING SOON ...
  //   </div>
  // );

  return (
    <div className={`$}`}>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </div>
  );
};

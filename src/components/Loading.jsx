import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => {
  return(
    <div className="flex justify-center items-center">
      <Loader type="ThreeDots" color="rgba(52, 211, 153, 0.4)" height={550} width={80}/>
    </div>
  )
};

import React from "react";
import { ClockLoader, BounceLoader,MoonLoader } from "react-spinners";

export const BounceSpinLoader = () =>{
    const override ={
        display:'block',
        margin:'0 auto',
    }
    return (
        <BounceLoader color={'#1E3A8A'} speedMultiplier={1} size={50} cssOverride={override}/>
    )
}
const Loader = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <ClockLoader
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

import React from "react";
import ProductCard from "./ProductCards";

const NewProducts = ({ products }) => {
  
  return (
    <>
      <div className="container w-[90%] mx-auto ">
        <div className="text-center text-4xl mt-5"> New Products</div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {products.map((prod) => {
            return <ProductCard key={prod._id} prod={prod} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NewProducts;

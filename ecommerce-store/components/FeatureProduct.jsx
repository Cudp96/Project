import CartContext from "@/context/CartContext";
import Link from "next/link";
import React, { useContext } from "react";


const FeatureProduct = ({ product }) => {
  const {addProduct} = useContext(CartContext);

  const addTocart = (e,id) =>{
    e.preventDefault();
    addProduct(id)
  }
  
  return (
    <div className="bg-gray-900 text-white py-10 w-[90%] mx-auto mt-2">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="mt-8 ms-6 order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {product.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">{product.description}</p>
          <div className="flex gap-4 mt-6">
            <Link href={"/products/1"}>
              <label className="cursor-pointer px-4 py-2 rounded border hover:bg-slate-400">
                Read more
              </label>
            </Link>
            <button>
              <label
              onClick={(e)=>addTocart(e, product._id)}
              className="cursor-pointer px-4 py-2 border rounded hover:bg-slate-400">
                Add to cart
              </label>
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={product.images[0]}
            alt="prod image"
            className="w-80 h-64 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;

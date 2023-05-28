import Navbar from "@/components/Navbar";
import React from "react";
import ProductPage from "@/components/ProductPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const products = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className="container w-[90%] mx-auto mt-25">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map((product) => {
            return <ProductPage key={product._id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default products;

export async function getServerSideProps() {
  const featuredProductId = "64731802de2c9386190cbc62";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);

  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      product: JSON.parse(JSON.stringify(featuredProduct)),
      products: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

import Layout from "@/components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getProducts } from "@/services/axios.service";

const Products = () => {
  const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   const response = getProducts();
    //   setProducts(response);
    // });

  return (
    <Layout>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search Product"
          className="ml-2 mt-3 w-80 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
        />
        <Link
          href="/products/new"
          className="bg-purple-500 rounded-2xl py-2 px-4 fixed right-4 top-2 hover:bg-purple-600 flex-1"
        >
          {" "}
          Add Product
        </Link>
        <span className="mx-auto font-mono text-3xl">Products</span>
        <div className=" flex justify-around items-center p-2 bg-slate-500 mb-2 rounded">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt
              className="w-24 h-24 rounded-3xl bg-transparent"
            />
          </div>
          <div className="">
            <span className="">Product's Name</span>
          </div>
          <div className="">
            <span className="">Product's Category</span>
          </div>
          <div className="">
            <span className="">Product's Price</span>
          </div>
          <div className="">
            <button className="bg-cyan-600 py-1 px-1 rounded hover:bg-cyan-700 border border-black-750">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
            <button className="bg-cyan-600 py-1 px-1 ml-1 rounded hover:bg-cyan-700 border border-black-750">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <div>
      <table className="mt-10 table-auto flex justify-center">
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Product Price</td>
          </tr>
        </thead>
        <tbody>
          {products && 
            products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div> */}
      </div>
    </Layout>
  );
};

export default Products;

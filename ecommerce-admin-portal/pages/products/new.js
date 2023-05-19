import Layout from "@/components/Layout";
import React from "react";

const NewProducts = () => {
  return (
    <Layout>
      <div className="min-h h-screen flex justify-center items-center flex-col bg-green-200">
        <h1 className="text-center bg-grey-200">Add New Products</h1>
        <div className="flex flex-col p-5 justify-center gap-4 bg-green-300 border-green-600">
          <div className="flex  gap-2">
            <div>
              <label>Name of Product:</label>
              <input
                type="text"
                className="p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter Name of Product"
              />
            </div>
            <div>
              <label>Product Category:</label>
              <input
                type="text"
                className="p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter product category"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <label>Product Price:</label>
              <input
                type="number"
                className="p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                placeholder="Product Price"
              />
            </div>
            <div>
              <label>Product's Image:</label>
              <label className="cursor-pointer flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mt-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label>Product Description:</label>
              <textarea
                placeholder="Write the description of the product."
                className="p-2"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="mt-2  bg-blue-400 py-2 px-4 rounded-2xl hover:bg-blue-500">
          Save
        </button>
      </div>
    </Layout>
  );
};

export default NewProducts;

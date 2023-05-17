import Layout from "@/components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getProducts } from "@/services/axios.service";

const Products = () => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const response = getProducts();
  //     setProducts(response);
  //   });

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
        <div className=" flex justify-around items-center p-2 bg-slate-500 mb-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt
              className='w-24 h-24 rounded-3xl bg-transparent'
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
            <button className='bg-cyan-600 py-2 px-4 rounded hover:bg-cyan-700 border border-black-750'>Remove</button>
          </div>
        </div>
        <div className=" flex justify-around items-center p-2 bg-slate-500 mb-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt
              className='w-24 h-24 rounded-3xl'
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
            <button className='bg-cyan-600 py-2 px-4 rounded hover:bg-cyan-700 border border-black-750'>Remove</button>
          </div>
        </div>
        <div className=" flex justify-around items-center p-2 bg-slate-500 mb-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt
              className='w-24 h-24 rounded-3xl'
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
            <button className='bg-cyan-600 py-2 px-4 rounded hover:bg-cyan-700 border border-black-750'>Remove</button>
          </div>
        </div>
        <div className=" flex justify-around items-center p-2 bg-slate-500 mb-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt
              className='w-24 h-24 rounded-3xl'
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
            <button className='bg-cyan-600 py-2 px-4 rounded hover:bg-cyan-700 border border-black-750'>Remove</button>
          </div>
        </div>
        <div className=" flex justify-around items-center p-2 bg-slate-500 mb-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt
              className='w-24 h-24 rounded-3xl'
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
            <button className='bg-cyan-600 py-2 px-4 rounded hover:bg-cyan-700 border border-black-750'>Remove</button>
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

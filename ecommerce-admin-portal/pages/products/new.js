import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BounceSpinLoader } from "@/components/Loader";
import { ReactSortable } from "react-sortablejs";
import { useRouter } from "next/router";

const NewProducts = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const uploadImage = async (e) => {
    console.log(e.target.files);
    const { files } = e.target;

    if (files.length > 0) {
      setIsUploading(true);
      const data = new FormData();

      for (let file of files) {
        data.append("file", file);
      }

      const response = await axios.post("/api/upload", data);
      // console.log(response.data.links);

      // It will store new images along with the old ones
      setImages((oldImages) => {
        // console.log('oldImages', oldImages);
        // console.log(response.data.links);
        // console.log('NewImages',[...oldImages, ...response.data.links]);
        return [...oldImages, ...response.data.links];
      });
      setIsUploading(false);
    }
  };
  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, category, images, price };
    await axios.post("/api/products", data);
    router.push("/products");
  };
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
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Product Category:</label>
              <div>
                <select
                  className="py-2 px-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Uncategories</option>
                  {categories.length > 0 &&
                    categories.map((category) => {
                      return (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <label>Product Price:</label>
              <input
                type="number"
                className="p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                placeholder="Product Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label>Product's Image:</label>
              <div className="mb-2 flex flex-wrap">
                <ReactSortable
                  list={images}
                  className="flex flex-wrap gap-1"
                  setList={(images) => setImages(images)}
                >
                  {images.length > 0 &&
                    images.map((image) => {
                      return (
                        <div key={image}>
                          <img src={image} alt="image" className="h-20 mx-1" />
                        </div>
                      );
                    })}
                </ReactSortable>
              </div>
              {isUploading ? (
                <BounceSpinLoader />
              ) : (
                <label className="cursor-pointer flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <input
                    type="file"
                    className="hidden"
                    onChange={uploadImage}
                  />
                </label>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label>Product Description:</label>
              <textarea
                placeholder="Write the description of the product."
                className="p-2"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <button
          onClick={saveProduct}
          className="mt-2  bg-blue-400 py-2 px-6 rounded hover:bg-blue-500"
        >
          Save
        </button>
      </div>
    </Layout>
  );
};

export default NewProducts;

import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const saveCategory = (e) => {
    e.preventDefault();
    const data = {
      name,
      parentCategory,
    };

   console.log(data);
  };

  const getCategory = async () => {
    const response = axios.get("/api/categories");
    setCategories(response.data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Layout>
      <form onSubmit={saveCategory} className='flex justify-center'>
        <h1>Category</h1>
        <div className=" flex gap-2">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Category"
          />
          <select onChange={(e) => setParentCategory(e.target.value)}>
            <option value=""> No Category </option>
            {categories?.length > 0 &&
              categories.map((category) => {
                return (
                  <option key={category._id} value={category._id}>
                    {" "}
                    {categories.name}
                  </option>
                );
              })}
          </select>
          <button className="bg-blue-500 px-4 py-1 rounded">Save</button>
        </div>
      </form>
    </Layout>
  );
};

export default Categories;

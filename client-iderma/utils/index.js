import axios from "axios";

const getCategories = () => {
  try {
    const response = axios.get("http://localhost:3000/categories");
    return response.data;
  } catch (error) {
    console.error("Fail to fetch categories", error);
  }
};

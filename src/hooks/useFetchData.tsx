import { useState } from "react";
import Product from "../interface/product";
import ToastNotify from "../components/toast";
const BASE_URL = "https://dummyjson.com";

interface Paginate {
  skip: number;
  limit: number;
}

export default function useFetchData() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [total, setTotal] = useState(0);

  const fetchProducts = async (par: Paginate) => {
    try {
      setIsloading(true);
      
      const pars = Object.entries(par)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      fetch(`${BASE_URL}/products?${pars}`)
        .then((response: any) => response.json())
        .then((resData: any) => {
          setData([...data, ...resData.products]);
          setTotal(resData.total);
        });

      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
      return <ToastNotify />;
    }
  };

  return {
    data,
    total,
    isLoading,
    fetchProducts,
  };
}

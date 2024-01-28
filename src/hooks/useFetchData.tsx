import { useState } from "react";
import Product from "../interface/product";
import ToastNotify from "../components/toast";

const BASE_URL = "https://dummyjson.com";

interface Paginate {
  skip?: number;
  limit?: number;
  query?: string;
}

export default function useFetchData() {
  const [data, setData] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  const fetchProducts = async (par: Paginate) => {
    try {
      const { skip, limit, query } = par;

      const queryString = query?.length! > 0 ? `&search?q=${query}` : "";

      const paginateString = `skip=${skip}&limit=${limit}`;

      fetch(`${BASE_URL}/products?${paginateString}${queryString}`)
        .then((response: any) => response.json())
        .then((resData: any) => {
          if (skip! > 10) setData([...data, ...resData.products]);
          else setData([...resData.products]);

          setTotal(resData.total);
        });
    } catch (error) {
      console.log(error);
      return <ToastNotify />;
    }
  };

  return {
    data,
    total,
    fetchProducts,
  };
}

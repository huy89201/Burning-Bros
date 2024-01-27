import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Grid } from "@mui/material";
import ProductCard from "../productCard";

interface Paginate {
  skip: number;
  limit: number;
}

export default function Productlist() {
  const { fetchProducts, data: products, total } = useFetchData();

  const [skip, setsKip] = useState(0);
  const limit = 10;

  const newSkip = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setsKip((prev) => prev + 10);
    }
  };

  useEffect(() => {
    if (skip > total) return;

    fetchProducts({ skip, limit });
  }, [skip]);

  useEffect(() => {
    window.addEventListener("scroll", newSkip);

    return () => window.removeEventListener("scroll", newSkip);
  }, []);

  return (
    <Grid container spacing={2}>
      {products.length > 0 &&
        products.map((item) => (
          <Grid key={item.id} item lg={3} md={4} xs={12}>
            <ProductCard product={item} />
          </Grid>
        ))}
    </Grid>
  );
}
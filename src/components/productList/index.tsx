import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Grid } from "@mui/material";
import ProductCard from "../productCard";
import { PAGINATE_LIMIT, PAGINATE_SKIP } from "../../util/common";

interface ProductListProps {
  queryString?: string;
}

export default function Productlist({ queryString }: ProductListProps) {
  const { fetchProducts, data: products, total = 0 } = useFetchData();

  const [skip, setsKip] = useState(PAGINATE_SKIP);

  const newSkip = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setsKip((prev) => prev + PAGINATE_LIMIT);
    }
  };

  useEffect(() => {
    if (skip > total) return;

    fetchProducts({ skip, limit: PAGINATE_LIMIT, query: queryString });
  }, [skip]);

  //reset when search
  useEffect(() => {
    setsKip(0);
    fetchProducts({ skip: 0, limit: PAGINATE_LIMIT, query: queryString });
  }, [queryString]);

  useEffect(() => {
    window.addEventListener("scroll", newSkip);

    return () => window.removeEventListener("scroll", newSkip);
  }, []);

  return (
    <Grid container spacing={2}>
      {products.length > 0 ? (
        products.map((item) => (
          <Grid key={item.id} item lg={3} md={4} xs={12}>
            <ProductCard product={item} />
          </Grid>
        ))
      ) : (
        <div>No data found....</div>
      )}
    </Grid>
  );
}

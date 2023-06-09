import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      try {
        if (cat) {
          axios.get("https://masaawatches.000webhostapp.com/server/index.php?direct=product").then((res) => {
            const allprod = res.data;
            const categoryfiltered = allprod.filter((prod) => prod.category === cat)
            setProducts(categoryfiltered);
          });
        } else {
          axios.get("https://masaawatches.000webhostapp.com/server/index.php?direct=product").then((res) => {
            setProducts(res.data);
          });
        }
      } catch (err) {console.log(err)}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.created_at - b.created_at)
      );
    } else if (sort === "asc") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="p-5 flex flex-wrap justify-between">
      {products.map((item) => (
        <Product item={item} key={item.sku} />
      ))}
    </div>
  );
};

export default Products;

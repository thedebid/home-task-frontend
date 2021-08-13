import { useEffect, useState } from "react";
import Product from "../Product/product";
import httpClient from "./../../utils/httpClient";
// import Nav from "./../Nav/nav";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    httpClient
      .GET("/product")
      .then((result) => {
        // console.log(result);
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //
      });
  }, []);

  return (
    <>
      <div className="container mydiv">
        <Product products={products} />
      </div>
    </>
  );
}
export default Home;

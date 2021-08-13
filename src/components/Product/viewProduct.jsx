import react, { useEffect, useState } from "react";
import Product from "./product";
import httpClient from "./../../utils/httpClient";

function ViewProduct() {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    httpClient
      .GET("/product/" + user._id)
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
  }, [user._id]);

  return (
    <>
      <div className="container mydiv">
        <Product products={products} />
      </div>
    </>
  );
}

export default ViewProduct;

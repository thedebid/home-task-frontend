import react, { useState } from "react";
import { useHistory } from "react-router-dom";
import httpClient from "./../../utils/httpClient";
import { toast } from "material-react-toastify";

function AddProduct() {
  let history = useHistory();
  const [filesToUpload, setFilesToUpload] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
  });

  const handleChange = (event) => {
    const { name, type, value, files } = event.target;

    if (type === "file") {
      filesToUpload.push(files[0]);
    }

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    //console.log(filesToUpload);
    httpClient
      .UPLOAD("POST", "/product", product, filesToUpload)
      .then((response) => {
        //   toast.success(response.data.message);
        history.replace("/viewProduct");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      {" "}
      <div className="container mydiv">
        <div className="row">
          <h4>Add Product Form</h4>
          <form>
            <div className="form-group">
              <label htmlFor="inputTitle">Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                className="form-control"
                value={product.title}
                placeholder="Enter Product Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Descrition</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleChange}
                name="description"
                value={product.description}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="inputPrice">Price</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={product.price}
                className="form-control"
                placeholder="Enter Product Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Image</label>
              <br />
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddProduct;

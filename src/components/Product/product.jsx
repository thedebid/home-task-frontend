function Product(data) {
  let imgUrl = "http://localhost:3001/file/images/";
  return (
    <div className="row">
      {data.products.length > 0 ? (
        data.products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="bbb_deals">
              <div className="bbb_deals_slider_container">
                <div className=" bbb_deals_item">
                  <div className="bbb_deals_image">
                    <img src={`${imgUrl}${product.image}`} alt="" />
                  </div>
                  <div className="bbb_deals_content">
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_name">{product.title}</div>
                      <div className="bbb_deals_item_price ml-auto">
                        ${product.price}
                      </div>
                    </div>

                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_category">
                        <p className="text-justify">{product.description}</p>
                      </div>
                    </div>
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_name">
                        <button className="btn btn-primary">Add to Cart</button>
                      </div>
                      <div className="bbb_deals_item_price ml-auto">
                        {/* <div>
                          <i className="fa fa-heart"></i>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p> No Product Found</p>
      )}
    </div>
  );
}

export default Product;

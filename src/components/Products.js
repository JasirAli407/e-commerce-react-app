import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../redux/actions";
import { notify } from "../utils";

function Products() {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsToList, setProductsToList] = useState([]);
  const dispatch = useDispatch();

  console.log("ins Products");

  useEffect(() => {
    const getProductsFromServer = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/JasirAli407/e-commerce-db/products"
      );

      const json = await response.json();
      setProducts(json);

      setProductsToList(json);
      // console.log("prod:", products);
      // console.log("prodList", productsToList);

      setLoading(false);

      //  setProductsToList(json)
      // console.log('prodtolist',productsToList);

      //  console.log(Array.isArray(products));
    };

    getProductsFromServer();
  }, []);

  const deleteProduct = (pId) => {

    const updatedProductsList = productsToList.filter(
      (product) => product.id !== pId
    );

    setProductsToList(updatedProductsList);
    notify("Successfully Deleted", "success");
  };

  const filterProducts = (category) => {
    // console.log(category);

    if (category === "all") {
      return setProductsToList(products);
    }

    const updatedList = products.filter(
      (product) => product.category == category
    );

    // console.log(updatedList);
    setProductsToList(updatedList);
  };

  const sortByPrice = () => {
    const updatedList = productsToList.filter((x) => x.price !== 0);

    updatedList.sort(function (a, b) {
      return a.price - b.price;
    });
    // console.log(updatedList);

    setProductsToList(updatedList);
  };

  function Loading() {
    return (
      <>
        <div className="col-lg-3 col-md-4  ">
          <Skeleton style={{ height: 350 }} />
        </div>

        <div className="col-lg-3 col-md-4">
          <Skeleton style={{ height: 350 }} />
        </div>

        <div className="col-lg-3 col-md-4">
          <Skeleton style={{ height: 350 }} />
        </div>

        <div className="col-lg-3 col-md-4 ">
          <Skeleton style={{ height: 350 }} />
        </div>
      </>
    );
  }

  function ShowProducts() {
    return (
      <>
        <div className=" d-flex justify-content-center mb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("all")}
          >
            All
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </button>

          <button
            style={{ marginLeft: "30%" }}
            className="btn btn-dark  me-2"
            onClick={sortByPrice}
          >
            Sort By Price
          </button>
          <div className="btn btn-light">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png"
              alt="X"
              height="20px"
              onClick={() => setProductsToList(products)}
            />
          </div>
        </div>

        {productsToList?.map((product) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4 " key={product.id}>
              <div className="card  text-center p-4">
                <div
                  onClick={() => deleteProduct(product.id)}
                  style={{ marginLeft: "90%", fontSize: "2rem" }}
                >
                  <i className="fa fa-trash"></i>
                </div>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />

                <div className="card-body">
                  <NavLink
                    to={`/products/${product.id}`}
                    key={product.id}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h5 className="card-title mb-0">
                      {product.title.length > 12
                        ? product.title.substring(0, 12) + "....."
                        : product.title}
                    </h5>
                    <p className="card-text lead fw-bold ">${product.price}</p>
                  </NavLink>

                  <br />
                  <button className="btn btn-outline-dark px-4 py-2" onClick={()=> {dispatch(addToCart(product)); notify('Added To Cart' , 'success') }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (<>
    
       
          <h1 className="display-6 text-center fw-bolder" style={{marginTop:55}}>Latest Products</h1>

          <hr />
        
      
        <div className="container" >
      <div className="row ">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>

    </>
  );
}

export default Products;

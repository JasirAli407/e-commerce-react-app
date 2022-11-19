import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addToCart } from "../redux/actions";
import { notify } from "../utils";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch()
  
  const state = useSelector(state=> state.cart)
  console.log(state);
  useEffect(() => {
    const getTheProduct = async () => {
      const res = await fetch(
        `https://my-json-server.typicode.com/JasirAli407/e-commerce-db/products/${id}`
      );

      const json = await res.json();

      setProduct(json);

      setLoading(false);
    };
    getTheProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="col">
        <Skeleton height={300} />
      </div>
    );
  };

  function addProductToCart(product){
    console.log(product);
    dispatch(addToCart(product))

  }

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img src={product.image} alt="" height="400" width="400" />
        </div>

        <div className="col-md-6">
          {!editMode && (
            <>
              <h4 className="text-uppercase text-black-50 mt-3">
                {product.category}
              </h4>

              <h3 className="display-5 ">{product.title}</h3>

              <p className="lead">
                Rating: {product.rating?.rate}
                <i className="fa fa-star"></i>
              </p>

              <h3 className="display-6 fw-bold my-4">${product.price}</h3>

              <p className="lead">{product.description}</p>
            </>
          )}

          {editMode && 
            <>
              
              <input
                className="text-uppercase text-black-50 mt-3"
                value={product.category}  
              />


              <input className="display-5 mt-3 " value={product.title} />
               <input className="lead mt-3"
               value = {`Rating: ${product.rating?.rate}`}/>
                <i className="fa fa-star"></i>
               


              <input className="display-6 fw-bold my-4" value={product.price}/>

              <textarea className="lead" value = {product.description} /> 
             


              <button
                className="btn btn-outline-dark"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
              <button className=" btn btn-dark px-4 ms-3" onClick={()=>{notify('Dummy request for updating', 'success'); setEditMode(false)}}>Save</button>
            </>
          }


          {!editMode && (  
            <>
              <button className="btn btn-outline-dark" onClick={()=>addProductToCart(product)}>Add To Cart</button>
              <NavLink to="/cart">

                <button className="btn btn-dark ms-5"> Go To Cart</button>
              </NavLink>
            </>
          )}

          <span
            style={{ float: "right" }}
            className="mt-1 fs-3"
            onClick={() => setEditMode(true)}
          >
            <i className="fa fa-edit"></i>
          </span>
        </div>
      </>
    );
  };

  return (
    <div className="container" style={{marginTop:80}}>
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
}

export default Product;

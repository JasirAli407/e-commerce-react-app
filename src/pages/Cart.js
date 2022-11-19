import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/actions";

function Cart() {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);

  const state = useSelector((state) => state.cart);

  const products = state
  // useEffect(() => {
  //   setProducts(state);
  // }, [state]);

  console.log('ins cart');  
  
  function ShowProducts() {
    return (
      <>
        {products.map((product) => {
          return(
          <>

<div className="row mt-2 mb-3" style={{ width: "80%" }}>
              <div className="col-md-4">
                <img src={product.image} alt="" height="200px" width="180px" />
              </div>

              <div className="col-md-4">
                <h3>{product.title}</h3>

                <p className="lead fw-bold">{product.qty}X ${product.price} = ${product.price * product.qty}</p>
              </div>
              <div className="col-md-4 ">
              <button onClick={()=>dispatch(deleteFromCart(product))}
                className="btn btn-outline-dark me-4" 
                
              >
                <i className="fa fa-minus"></i>
              </button>

              <button
                className="btn btn-outline-dark me-4"
                onClick={()=>dispatch(addToCart(product))}
              >
                <i className="fa fa-plus"></i>
              </button>

              </div>
            </div>
            <hr />
          </>
          )
        })
        }
      </>
    )
  }


  return(<>

    <h1  style={{marginTop:70}}  className="display-6 text-center fw-bolder ">
      Cart Items</h1>    

      <hr />
      <div className="row justify-content-center">
    <ShowProducts/>

    </div> 
    
    </>
  )
}

export default Cart;

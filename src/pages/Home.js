import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import { useEffect } from "react";
import Products from "../components/Products";

function Home() {
   
const [loading, setLoading] = useState(true)


useEffect(()=>{
    setLoading(false)
},[])

  console.log("HOme");


    const Loading = ()=>{

        return <Skeleton style={{height:'100vh'}} />
    }

    if(loading){
      return <Loading />
    }

    

    return(
    <div className="" style={{ marginTop: 50 }}>
      <div className="card  border-0">
        <img
          src="assets/r.jpg"
          className="card-img"
          alt="home-carousel"
          height="550"
        />
        <div className="card-img-overlay d-flex text-dark flex-column justify-content-center">
          <div className="container ">
            <h5 className="card-title display-3 fw-bolder ms-6">
              UPTO 70% OFF. ON WOMEN'S WEAR
            </h5>
            <p className="card-text">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
}

export default Home;

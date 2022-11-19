import React from "react";
import { notify } from "../utils";

function CreateProduct() {
  return (
    <div className="" style={{marginTop:70}}>
      <h1 className="display-6 fw-bolder text-center">Add Product</h1>

      <hr />

      <form className="d-flex flex-column  container">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
        />

        <textarea
          name=""
          className="form-control mt-3"
          id=""
          cols="30"
          rows="5"
          placeholder="Description"
          required
        ></textarea>

        <input
          type="text"
          placeholder="Category"
          className="form-control mt-3"
          required
        />

        <input
          type="text"
          placeholder="Price"
          className="form-control mt-3"
          required
        />

        <div className="mt-3 " style={{alignSelf: 'start', }}>
          <label for="img-input" className="me-4">
            Add Image:
          </label>
          <input type="file" id="img-input" placeholder="Price" />
        </div>


        <button
        type=""
        className="btn btn-dark mt-3"
        onClick={() => notify("Dummy request to add product", "success")}
      >
        Add Product
      </button>
      </form>

      
    </div>
  );
}

export default CreateProduct;

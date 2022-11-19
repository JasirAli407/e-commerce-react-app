import React from "react";

function cart(state = [], { type, payload }) {
  switch (type) {

    case "ADDITEM":
      console.log(payload);

      const exist = state.find((product) => {
        console.log(product.id);
        return product.id == payload.id;
      });
      console.log(exist);

      if (exist) {
        return state.map((product) =>
          product.id == payload.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      }

      return [...state, { ...payload, qty: 1 }];
        

      case "DELITEM" :

         if(payload.qty > 1){
        return  state.map((product)=>product.id == payload.id ? {...product, qty : product.qty - 1} : product)
         }

         return state.filter((product)=> product.id !== payload.id)
      

    default:
      return state;
  }
}

export default cart;

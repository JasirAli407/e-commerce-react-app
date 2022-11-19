export const addToCart = (product)=>{
    return {
        type : "ADDITEM",
        payload: product
    }
}

export const deleteFromCart = (product)=>{
    return {
        type : 'DELITEM',
        payload: product
    }
}


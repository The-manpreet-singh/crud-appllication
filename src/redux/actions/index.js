// for Add Item to Cart

export const addCart= (product) => {
    return{
        type:"ADDITEM",
        payload: product
    }
}

// for delete Item to Cart

export const deleteCart= (product) => {
    return{
        type:"DELETEITEM",
        payload: product
    }
}
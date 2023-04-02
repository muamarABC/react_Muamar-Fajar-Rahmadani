import {creatSlice} from redux-toolkit

const initialValue = {
    productName : "",

}

export const ProductSlice = creatSlice({
    name : "Product",
    initialState: {
        Product: initialValue
    },
    reducer:{
        hapusProduct: (state, action) => {
            const Confirm = window.confirm("Are you sure you want to delete this product?");
            if(Confirm){
                const newProduct = [...action.payload];
                newProduct.splice(index, 1);
                state.Product = state.Product
            }
        }
    }
})
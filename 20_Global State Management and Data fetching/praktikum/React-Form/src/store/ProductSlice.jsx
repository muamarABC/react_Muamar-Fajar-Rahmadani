import {createSlice} from "@reduxjs/toolkit"

const ProductSlice = createSlice ({
    name: "product",
    initialState:{
        productName: "Baju",
        productCategory: "Fashion",
        Image : "baju.jpg",
        productFreshnees: "Brand New",
        productDescription : "Bagus Sekali",
        productPrice: "12"
    },
    reducers:{
        add: (state, action) =>{
            state.productName = action.payload.productName;
            state.productCategory = action.payload.productCategory;
            state.Image = action.Image;
            state.productFreshnees = action.payload.productFreshnees;
            state.productDescription = action.payload.productDescription;
            state.productPrice = action.payload.productPrice;
        }
    }
})

export const {add} = ProductSlice.actions;
export default ProductSlice.reducer
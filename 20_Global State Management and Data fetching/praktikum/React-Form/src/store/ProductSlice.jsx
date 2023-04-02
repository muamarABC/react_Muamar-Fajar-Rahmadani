import {createSlice} from "@reduxjs/toolkit"

const ProductSlice = createSlice ({
    name: "product",
    initialState:{
        id: "1",
        productName: "Baju",
        productCategory: "Fashion",
        Image : "baju.jpg",
        productFreshnees: "Brand New",
        productDescription : "Bagus Sekali",
        productPrice: "12"
    },
    reducers:{
        add: (state, action) =>{
            state.push(action.payload)
        },
        delete :()=>{
            const {id} = action.payload
            const del = state.find(product => product.id == id);
            if(del) {
                return state.filter(f => f.id !==id);
            }
        }
    }
})

export const {add, delete} = ProductSlice.actions;
export default ProductSlice.reducer;
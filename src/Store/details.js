import { createSlice } from "@reduxjs/toolkit";

let Id=8001
const details = createSlice({
    name:"UserDetails",
    initialState:[],
    reducers:{
        detailsAdd:(details,action)=>{
            details.push({id:Id++,
            productDetails:action.payload.productDetails,
        price:action.payload.price})
        },
        detailsUpdate:(details,action)=>{
            const index =details.findIndex(detail=>detail.id===action.payload.id)
           
            details[index].productDetails=action.payload.productDetails
            details[index].price=action.payload.price
        },
        detailsDelete:(details,action)=>{
            const index =details.findIndex(detail=>detail.id===action.payload.id)
            
            details.splice(index,1)
        }
    }

})
export const {detailsAdd,detailsDelete,detailsUpdate}=details.actions
export default details.reducer
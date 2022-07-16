import { configureStore } from "@reduxjs/toolkit";
import details from "./details";
const configStore =()=>{
    return configureStore({reducer:details})
}
export default configStore
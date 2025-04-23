import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'; // Import the reducer
import productReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"
import checkoutReducer from "./slices/checkoutSlice"
import ordersReducer from "./slices/orderSlice"
import adminReducer from "./slices/adminSlice"
// import adminReducer from "./slices/adminSlice"
import adminProductReducer from "./slices/adminProductSlice"
import adminOrdersReducer from "./slices/adminOrderSlice"

const store = configureStore({
    reducer: {
        auth: authReducer, // Add the reducer to the store
        products: productReducer,
        cart:cartReducer,
        checkout:checkoutReducer,
        orders:ordersReducer,
        admin:adminReducer,
        adminProducts:adminProductReducer,
        adminOrders:adminOrdersReducer,
        
    },  
});

export default store;

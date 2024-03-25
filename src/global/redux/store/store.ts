import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../slices/authenticationSlice"

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;
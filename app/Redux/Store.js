import { Slices } from "./Slices";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        data : Slices.reducer
    },
})

export default store
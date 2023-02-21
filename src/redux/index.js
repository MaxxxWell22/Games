import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import gamesReducer from "./games/games";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReducer,
    },
});

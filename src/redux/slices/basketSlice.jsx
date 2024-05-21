import { createSlice } from "@reduxjs/toolkit";

const getBasketBromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
};
const initialState = {
    products: getBasketBromStorage(),
};

const writeFromToBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct =
                state.products &&
                state.products.find(
                    (product) => product.id === action.payload.id
                );
            if (findProduct) {
                // Daha önceden eklenmiştir.
                const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [extractedProducts, findProduct]
                writeFromToBasketToStorage(state.products);

                

            } else {
                state.products = [...state.products, action.payload];
                writeFromToBasketToStorage(state.products);
            }
        },
    },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;

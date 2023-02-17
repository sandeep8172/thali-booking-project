import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    DUMMY_ITEMS: [
        {
            title: "Paneer Butter Masala",
            price: 300,
            image: "./img/paneer.jpg",
            quantity: 0,
        },
        {
            title: "Dal",
            price: 200,
            image: "./img/daal.jpg",
            quantity: 0,
        },
        {
            title: "Curd",
            price: 80,
            image: "./img/curd.jpg",
            quantity: 0,
        },
        {
            title: "Pickle",
            price: 7,
            image: "./img/pickle.jpg",
            quantity: 0,
        },
        {
            title: "Roti",
            price: 14,
            image: "./img/roti.jpg",
            quantity: 0,
        },
        {
            title: "Rasgulla",
            price: 25,
            image: "./img/rasgulla.jpg",
            quantity: 0,
        }],
    items: [],
    totalQuantity: 0,
    cartButtonIsVisible: false,
};

const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        addItems(state, action) {
            const newItem = action.payload;
            const dummy = state.DUMMY_ITEMS.length;
            for (let i = 0; i < dummy; i++) {
                state.DUMMY_ITEMS[i].quantity++;
            }
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.cartButtonIsVisible = true;
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            };

        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.cartButtonIsVisible = true;
            const dummy = state.DUMMY_ITEMS.length;
            for (let i = 0; i < dummy; i++) {
                state.DUMMY_ITEMS[i].quantity--;
            }
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        toogleHandler(state) {
            state.cartButtonIsVisible = !state.cartButtonIsVisible;
        },
        nameToogleHandler(state) {
            state.cartButtonIsVisible = false;
        }
    },
});

export const foodActions = foodSlice.actions;

export default foodSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Функция для загрузки состояния из localStorage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error("Could not load state from localStorage", error);
        return undefined;
    }
};

// Инициализируем начальное состояние
const initialState = loadStateFromLocalStorage() || {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            saveStateToLocalStorage(state); // Сохраняем состояние в localStorage
        },
        incrementItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
            saveStateToLocalStorage(state); // Сохраняем состояние в localStorage
        },
        decrementItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
            saveStateToLocalStorage(state); // Сохраняем состояние в localStorage
        },
    },
});

// Функция для сохранения состояния в localStorage
const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (error) {
        console.error("Could not save state to localStorage", error);
    }
};

export const { addToCart, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAll = createAsyncThunk(
    "all/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/all");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getSearchAll = createAsyncThunk(
    "all/getSearchAll",
    async (name, { rejectWithValue }) => {
        try {
            const res = await axios.get('/all');
            const filteredData = res.data.filter(item => item.name.includes(name));
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return filteredData;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getOneProduct = createAsyncThunk(
    "all/getOneProduct",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/all/${id}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const allSlice = createSlice({
    name: "all",
    initialState: {
        data: [],
        oneProduct: {},
        status: "",
        dataSearch: [],
        error: "",
        dataLength: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getAll.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(getSearchAll.pending, (state) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getSearchAll.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getSearchAll.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.dataSearch = action.payload;
            })
    .addCase(getOneProduct.pending, (state) => {
            state.status = 'loading';
            state.error = '';
        })
            .addCase(getOneProduct.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getOneProduct.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.oneProduct = action.payload;
            })
    },
});

export default allSlice.reducer;
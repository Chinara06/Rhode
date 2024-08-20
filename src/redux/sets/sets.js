import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getSets = createAsyncThunk(
    "sets/getSets",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/sets");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getOneSets = createAsyncThunk(
    "lip/getOneSets",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/sets/${id}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const setsSlice = createSlice({
    name: "sets",
    initialState: {
        data:[],
        status: "",
        error:"",
        dataLength:0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSets.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getSets.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getSets.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(getOneSets.pending, (state) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getOneSets.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getOneSets.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.oneSets = action.payload;
            })
    },
});



export default setsSlice.reducer;
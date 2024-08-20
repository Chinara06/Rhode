import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getLip = createAsyncThunk(
    "lip/getLip",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/lip");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getOneLip = createAsyncThunk(
    "lip/getOneLip",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/lip/${id}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const lipSlice = createSlice({
    name: "lip",
    initialState: {
        data:[],
        status: "",
        oneLip:{},
        error:"",
        dataLength:0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getLip.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getLip.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getLip.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(getOneLip.pending, (state) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getOneLip.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getOneLip.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.oneLip = action.payload;
            })
    }
});



export default lipSlice.reducer;
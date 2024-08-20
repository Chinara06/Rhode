import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getSkin = createAsyncThunk(
    "skin/getSkin",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/skin");
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getOneSkin = createAsyncThunk(
    "skin/getOneSkin",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/skin/${id}`);
            if (res.status !== 200) {
                throw new Error("Server error !");
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
const skinSlice = createSlice({
    name: "skin",
    initialState: {
        data:[],
        status: "",
        oneSkin:{},
        error:"",
        dataLength:0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSkin.pending, (state, action) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getSkin.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getSkin.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
            .addCase(getOneSkin.pending, (state) => {
                state.status = 'loading';
                state.error = '';
            })
            .addCase(getOneSkin.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getOneSkin.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.error = '';
                state.oneSkin = action.payload;
            })
    },
});



export default skinSlice.reducer;
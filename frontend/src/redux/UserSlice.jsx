import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to handle form submission
export const submitUserData = createAsyncThunk(
  'user/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://form-83we.onrender.com/user', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitUserData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitUserData.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

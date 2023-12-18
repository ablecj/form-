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

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get('https://form-83we.onrender.com/user');
  return response.data.data;
});

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (id) => {
  const response = await axios.get(`https://form-83we.onrender.com/user/${id}`);
  return response.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async ({ id, formData }) => {
  await axios.put(`https://form-83we.onrender.com/user/${id}`, formData);
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
  await axios.delete(`https://form-83we.onrender.com/user/${id}`);
  return id;
});

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    userData: {
      firstname: '',
      secondname: '',
      email: '',
      address: '',
    },
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
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.status = 'succeeded';
      });
  },
});

export default userSlice.reducer;

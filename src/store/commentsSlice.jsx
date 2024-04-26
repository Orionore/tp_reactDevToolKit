// store/commentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments } from '../api/comments';

export const fetchCommentsAsync = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await fetchComments();
    return response;
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;

export const selectAllComments = (state) => state.comments.comments;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsForPost as fetchCommentsForPostApi, addCommentToPost as addCommentToPostApi } from '../../api/comments';

export const fetchCommentsForPost = createAsyncThunk(
  'comments/fetchCommentsForPost',
  async (postId) => {
    const comments = await fetchCommentsForPostApi(postId);
    return comments;
  }
);

export const addCommentToPost = createAsyncThunk(
  'comments/addCommentToPost',
  async (commentData) => {
    const comment = await addCommentToPostApi(commentData);
    return comment;
  }
);

const initialState = {
  comments: [],
  status: 'idle',
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsForPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommentsForPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchCommentsForPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCommentToPost.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;

// store/postsSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../api/posts';

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts();
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

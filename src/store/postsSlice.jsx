// store/postsSlice.jsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, fetchPosts, fetchPostById } from '../api/posts';

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts();
    return response.data;
  }
);

export const fetchPostByIdAsync = createAsyncThunk(
  'posts/fetchPostById',
  async (postId) => {
    const response = await fetchPostById(postId);
    return response.data;
  }
);

export const addPostAsync = createAsyncThunk(
  'posts/addPost',
  async (newPost) => {
    const response = await addPost(newPost);
    return response.data;
  }
);

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
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
      })
      .addCase(fetchPostByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const updatedPostIndex = state.posts.findIndex(post => post.id === action.payload.id);
        if (updatedPostIndex !== -1) {
          state.posts[updatedPostIndex] = action.payload;
        }
      })
      .addCase(fetchPostByIdAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(addPostAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPostAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts.push(action.payload);
      })
      .addCase(addPostAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

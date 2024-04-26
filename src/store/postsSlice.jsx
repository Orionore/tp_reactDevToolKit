import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, fetchPosts, fetchPostById } from '../api/posts'; // Correction de l'importation

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
    const response = await fetchPostById(postId); // Utilisation correcte de fetchPostById
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
      })
      .addCase(fetchPostByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = [action.payload]; // Correction de la façon dont les détails du post sont stockés
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
        state.posts.push(action.payload); // Ajout du nouveau post à la liste
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

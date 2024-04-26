// api/posts/posts.jsx
import axios from 'axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

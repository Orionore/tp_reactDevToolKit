// api/comments/comments.jsx
import axios from 'axios';

export const fetchComments = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

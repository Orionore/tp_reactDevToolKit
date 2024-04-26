// api/comments/comments.jsx
export const fetchComments = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!response.ok) {
      throw new Error('Error fetching comments');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

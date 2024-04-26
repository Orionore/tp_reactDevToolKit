
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchCommentsForPost = async (postId) => {
  const response = await fetch(`${BASE_URL}/comments?postId=${postId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }
  return response.json();
};

export const addCommentToPost = async (commentData) => {
  const response = await fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });
  if (!response.ok) {
    throw new Error('Failed to add comment');
  }
  return response.json();
};

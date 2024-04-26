// api/comments/index.jsx
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

export const fetchCommentById = async (commentId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    if (!response.ok) {
      throw new Error('Error fetching comment by ID');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching comment by ID');
  }
};

export const addComment = async (newComment) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    });
    if (!response.ok) {
      throw new Error('Error adding comment');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error adding comment');
  }
};

export const updateComment = async (commentId, updatedComment) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedComment),
    });
    if (!response.ok) {
      throw new Error('Error updating comment');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error updating comment');
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error deleting comment');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error deleting comment');
  }
};

export const fetchCommentsByPostId = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    if (!response.ok) {
      throw new Error('Error fetching comments by post ID');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching comments by post ID');
  }
};

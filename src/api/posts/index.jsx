// api/posts/index.jsx
export const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Error fetching posts');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

export const fetchPostById = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Error fetching post by ID');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching post by ID');
  }
};

export const addPost = async (newPost) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) {
      throw new Error('Error adding post');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error adding post');
  }
};

export const updatePost = async (postId, updatedPost) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });
    if (!response.ok) {
      throw new Error('Error updating post');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error updating post');
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error deleting post');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error deleting post');
  }
};

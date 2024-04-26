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

export const fetchPostById = async (postId) => { // Assurez-vous que fetchPostById est correctement exportée
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

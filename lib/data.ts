export interface IPost {
    id: string;
    title: string;
    description: string;
    date: Date;
};

let posts: IPost[] = [];

export const getPosts = () => { 
    return posts;   
};

export const addPost = (post: IPost) => {
    posts.push(post);
};

export const getPostById = (id: string) => {
    const post = posts.find((post) => post.id === id);
    if (!post) {
        throw new Error(`Post with ID ${id} not found`);
    }
    return post;
};

export const updatePostById = (id: string, updatedPostData: Partial<IPost>) => {
  const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
        posts[index] = { ...posts[index], ...updatedPostData };
        return posts[index];
    } else {
        throw new Error(`Post with ID ${id} not found`);
    }
};

export const deletePostById = (id: string) => {
    const initialLength = posts.length;
    posts = posts.filter((post) => post.id !== id);
    if (posts.length === initialLength) {
        throw new Error(`Post with ID ${id} not found`);
    }
};
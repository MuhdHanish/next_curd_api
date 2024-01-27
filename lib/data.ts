let id: number = 0;
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
    const postData = { ...post, id: (++id).toString(), date: new Date() };
    posts.push(postData);
    return postData;
};

export const getPostById = (id: string) => {
    const post = posts.find((post) => post.id === id);
    return post;
};

export const updatePostById = (id: string, updatedPostData: Partial<IPost>) => {
  const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
        posts[index] = { ...posts[index], ...updatedPostData };
        return posts[index];
    } else {
        return null;
    }
};

export const deletePostById = (id: string) => {
    const initialLength = posts.length;
    posts = posts.filter((post) => post.id !== id);
    if (posts.length === initialLength) {
        return false;
    }
    return true;
};
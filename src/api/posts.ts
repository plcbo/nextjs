import axios from "axios";
import type { PostType } from "../types/post";

const postsApi = {
  list: () =>
    axios.get<PostType[]>(`https://jsonplaceholder.typicode.com/posts`),
  post: (id: string) =>
    axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`),
};

export default postsApi;

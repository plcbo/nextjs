import { useEffect, useState } from "react";

import type { PostType } from "../../types/post";
import { postsApi } from "../../api";
import PostList from "../../components/PostList";

const CSR = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    const postsRes = await postsApi.list();
    setPosts(postsRes.data);
  };

  useEffect(() => {
    if (!posts.length) getPosts();
  }, [posts]);

  if (!posts.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Client-side rendering</h1>
      <PostList pagePrefix="client-side-rendering" posts={posts} />
    </div>
  );
};

export default CSR;

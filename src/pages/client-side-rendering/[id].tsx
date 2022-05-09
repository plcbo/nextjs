import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { postsApi } from "../../api";
import { PostType } from "../../types/post";
import Post from "../../components/Post";

const CSR: NextPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<PostType | null>(null);

  const getPost = async (postID: string) => {
    const postRes = await postsApi.post(postID);
    setPost(postRes.data);
  };

  useEffect(() => {
    if (typeof router.query.id === "string") {
      getPost(router.query.id);
    }
  }, [router.query.id]);

  if (!post) return <div>Loading...</div>;

  return <Post post={post} />;
};

export default CSR;

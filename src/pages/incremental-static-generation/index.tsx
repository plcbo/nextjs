import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { PostType } from "../../types/post";
import { postsApi } from "../../api";
import PostList from "../../components/PostList";

type PropsType = {
  posts: PostType[];
};

const ISG: NextPage<PropsType> = ({ posts }) => {
  return (
    <div>
      <h1>Incremental static generation</h1>
      <PostList pagePrefix="incremental-static-generation" posts={posts} />
    </div>
  );
};

export default ISG;

export const getStaticProps: GetStaticProps = async () => {
  const res = await postsApi.list();

  return { props: { posts: res.data }, revalidate: 60 };
};

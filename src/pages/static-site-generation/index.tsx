import type { GetStaticProps, NextPage } from "next";
import type { PostType } from "../../types/post";
import { postsApi } from "../../api";
import PostList from "../../components/PostList";

type PropsType = {
  posts: PostType[];
};

const CSR: NextPage<PropsType> = ({ posts }) => {
  return (
    <div>
      <h1>Static-site generation</h1>
      <PostList pagePrefix="static-site-generation" posts={posts} />
    </div>
  );
};

export default CSR;

export const getStaticProps: GetStaticProps = async () => {
  const res = await postsApi.list();

  return { props: { posts: res.data } };
};

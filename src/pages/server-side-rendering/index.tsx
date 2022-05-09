import type { NextPage } from "next";
import type { PostType } from "../../types/post";
import { postsApi } from "../../api";
import PostList from "../../components/PostList";

type PropsType = {
  posts: PostType[];
};

const CSR: NextPage<PropsType> = ({ posts }) => {
  return (
    <div>
      <h1>Server-side rendering</h1>
      <PostList pagePrefix="server-side-rendering" posts={posts} />
    </div>
  );
};

export default CSR;

export const getServerSideProps = async () => {
  const res = await postsApi.list();

  return { props: { posts: res.data } };
};

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { PostType } from "../../types/post";
import { postsApi } from "../../api";
import Post from "../../components/Post";

type PropsType = {
  post: PostType;
};

const CSR: NextPage<PropsType> = ({ post }) => <Post post={post} />;

export default CSR;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.id !== "string") throw new Error();

  const res = await postsApi.post(params.id);

  return { props: { post: res.data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await postsApi.list();

  const paths = res.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

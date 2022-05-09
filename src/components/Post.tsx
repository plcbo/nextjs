import styles from "../styles/Posts.module.css";
import { FC } from "react";
import type { PostType } from "../types/post";

type PropsType = {
  post: PostType;
};

const Post: FC<PropsType> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

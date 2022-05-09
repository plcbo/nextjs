import styles from "../styles/Posts.module.css";
import Link from "next/link";
import { FC } from "react";
import type { PostType } from "../types/post";

type PropsType = {
  pagePrefix: string;
  posts: PostType[];
};

const PostList: FC<PropsType> = ({ pagePrefix, posts }) => {
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <Link key={post.id} href={`/${pagePrefix}/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default PostList;

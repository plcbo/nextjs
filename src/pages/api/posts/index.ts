import type { NextApiRequest, NextApiResponse } from "next";
import type { PostType } from "../../../types/post";
import { postsApi } from "../../../api";

const getPosts = async (
  req: NextApiRequest,
  res: NextApiResponse<PostType[]>
) => {
  const response = await postsApi.list();

  res.status(200).json(response.data);
};

export default getPosts;

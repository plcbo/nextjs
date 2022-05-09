import type { NextApiRequest, NextApiResponse } from "next";
import type { PostType } from "../../../types/post";
import { postsApi } from "../../../api";

const getPosts = async (
  req: NextApiRequest,
  res: NextApiResponse<PostType>
) => {
  if (typeof req.query.id !== "string") {
    res.status(404);
  } else {
    const response = await postsApi.post(req.query.id);

    res.status(200).json(response.data);
  }
};

export default getPosts;

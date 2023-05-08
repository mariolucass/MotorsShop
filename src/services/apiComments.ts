import { apiUsingNow } from "./api";
import { iComment, iCommentRequest } from "../interfaces";

export async function postComment(
  data: iCommentRequest,
  id: string
): Promise<iComment> {
  const { data: response } = await apiUsingNow.post<iComment>(
    `comments/${id}`,
    data
  );
  return response;
}

export async function deleteComment(id: string): Promise<void> {
  await apiUsingNow.delete(`comments/${id}`);
}

export async function patchComment(
  data: iCommentRequest,
  id: string
): Promise<iComment> {
  const { data: response } = await apiUsingNow.patch<iComment>(
    `comments/${id}`,
    data
  );
  return response;
}

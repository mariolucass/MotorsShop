import { IComment } from "../interfaces";
import { apiUsingNow } from "./api";

export async function postComment(data: IComment): Promise<void> {
  const { data: response } = await apiUsingNow.post("comments", data);
  return response;
}

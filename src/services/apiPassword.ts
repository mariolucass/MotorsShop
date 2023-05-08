import { apiUsingNow } from "./api";
import { iEmailForReset, iResetPassword } from "../interfaces";

export async function sendEmailPassword(data: iEmailForReset) {
  const { data: response } = await apiUsingNow.post("/resetpassword", data);
  return response;
}

export async function resetPassword(
  userId: string,
  token: string,
  data: iResetPassword
) {
  const { data: response } = await apiUsingNow.post(
    `/resetpassword/${userId}/${token}`,
    data
  );

  return response;
}

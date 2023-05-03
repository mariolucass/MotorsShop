import { iEmailForReset, iResetPassword } from "../interfaces";
import { apiUsingNow } from "./api";

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

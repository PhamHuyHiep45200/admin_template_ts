import request from "..";

export const signInEmail = async (data: any) => {
  return request(`/user-info/login`, {
    method: "POST",
    data,
  });
};
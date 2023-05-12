import http from "./httpService";

export const logInUser = (data) => {
   return http.post("/user/login", data);
};

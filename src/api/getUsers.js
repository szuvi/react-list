import users from "./users.json";

export function getUsers() {
  return new Promise((res) => setTimeout(res(users), 1000));
}

export const api = { getUsers };
export default api;

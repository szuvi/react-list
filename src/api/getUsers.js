const URL = "https://tranquil-ravine-39028.herokuapp.com/";

export async function getUsers() {
  const users = await fetch(URL);
  return users.json();
}

export const api = { getUsers };
export default api;

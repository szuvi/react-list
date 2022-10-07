import * as React from "react";
import api from "../api/getUsers";
import Loader from "../Components/Loader";
import TableHead from "../Components/TableHead";
import UserRow from "../Components/UserRow";
import { USER_TABLE_HEADERS } from "../consts";

export function Users() {
  const [users, setUsers] = React.useState([]);
  console.log("Users render");

  React.useEffect(() => {
    api.getUsers().then((res) => setUsers(res));
  }, []);

  function toggleActive(id) {
    setUsers((currUsers) =>
      currUsers.map((user) => {
        if (user.id === id) {
          return { ...user, active: !user.active };
        }
        return user;
      })
    );
  }

  function deleteHandler(id) {
    setUsers((currUsers) => currUsers.filter((user) => user.id !== id));
  }

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <table>
      <TableHead headers={USER_TABLE_HEADERS} />
      <tbody>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onActivate={toggleActive}
            onDelete={deleteHandler}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Users;

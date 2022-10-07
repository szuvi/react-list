import * as React from "react";
import api from "../api/getUsers";
import Loader from "../Components/Loader";
import TableHead from "../Components/TableHead";
import { MemoizedUserRow } from "../Components/UserRow";
import { USER_TABLE_HEADERS } from "../consts";

export function Users() {
  const [users, setUsers] = React.useState([]);
  console.log("Users render");

  React.useEffect(() => {
    api.getUsers().then((res) => setUsers(res));
  }, []);

  const toggleActive = React.useCallback(
    (id) => {
      setUsers((currUsers) =>
        currUsers.map((user) => {
          if (user.id === id) {
            return { ...user, active: !user.active };
          }
          return user;
        })
      );
    },
    [setUsers]
  );

  const deleteHandler = React.useCallback(
    (id) => {
      setUsers((currUsers) => currUsers.filter((user) => user.id !== id));
    },
    [setUsers]
  );

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <table>
      <TableHead headers={USER_TABLE_HEADERS} />
      <tbody>
        {users.map((user) => (
          <MemoizedUserRow
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

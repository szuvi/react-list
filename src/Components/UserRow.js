import * as React from "react";

export function UserRow({ user, onActivate, onDelete }) {
  console.log("UserRow render")
  function activeHandler() {
    onActivate(user.id);
  }

  function deleteHandler() {
    onDelete(user.id);
  }

  return (
    <tr>
      {Object.values(user).map((entry, i) => (
        <td key={entry}>{entry.toString()}</td>
      ))}
      <button type="button" onClick={activeHandler}>
        Activate
      </button>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </tr>
  );
}

export default UserRow;

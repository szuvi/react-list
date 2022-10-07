import * as React from "react";

export function UserRow({ user, onActivate, onDelete }) {
  console.log("UserRow render");

  const activeHandler = () => onActivate(user.id);
  const deleteHandler = () => onDelete(user.id);

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

export const MemoizedUserRow = React.memo(
  UserRow,
  (prevProps, nextProps) =>
    prevProps.user.active === nextProps.user.active &&
    prevProps.onActivate === nextProps.onActivate &&
    prevProps.onDelete === nextProps.onDelete
);

export default MemoizedUserRow;

import * as React from "react";

export function TableHead({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;

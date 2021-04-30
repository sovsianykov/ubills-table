import React from "react";
import Row from "./Row";

function TableComponent({rows}) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>month</th>
            <th>prev</th>
            <th>current</th>
            <th>tariff</th>
            <th>sum</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
        {rows&&rows.map(row => (<Row key={row.id} row={row}/>))}
        </tbody>
      </table>
    </>
  );
}

export default TableComponent;

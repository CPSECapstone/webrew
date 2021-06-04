/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { useTable } from 'react-table';

// Most of the table code came from here https://blog.logrocket.com/complete-guide-building-smart-data-table-react/
function TableComponent({ columns, data, rowClickFunction }: any) {
   // Passing in undefined to rowClickFunction will remove hover/click effect from table

   const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups, if your table has groupings
      rows, // rows for the table based on the data passed
      prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
   } = useTable({
      columns,
      data,
   });

   return (
      <table {...getTableProps()}>
         <thead>
            {headerGroups.map((headerGroup) => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
               prepareRow(row);
               return (
                  <tr
                     className={rowClickFunction !== undefined ? 'hoverRow' : ''}
                     {...row.getRowProps()}
                     onClick={() =>
                        rowClickFunction !== undefined ? rowClickFunction(row.original) : undefined
                     }
                  >
                     {row.cells.map((cell) => {
                        return (
                           <td
                              {...cell.getCellProps()}
                              style={cell.value.style ? cell.value.style : {}}
                           >
                              {cell.render('Cell')}
                           </td>
                        );
                     })}
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}

export default TableComponent;

import React, { useMemo } from 'react';
import TableComponent from '../TableComponent/TableComponent';

function LTTargetViewTable() {
   const data = [
      {
         row: {
            section: 1,
            target: 'LT1',
            average: '60',
            progress: '50%',
            objectives: ['Obj1', 'Obj2'],
         },
      },
      {
         row: {
            section: 1,
            target: 'LT2',
            average: '',
            progress: '80%',
            objectives: ['Obj1', 'Obj2'],
         },
      },
   ];

   const columns = useMemo(
      () => [
         {
            Header: 'Section',
            accessor: 'row.section',
         },
         {
            Header: 'Target',
            accessor: 'row.target',
         },
         {
            Header: 'Average',
            accessor: 'row.average',
         },
         {
            Header: 'Progress',
            accessor: 'row.progress',
         },
         {
            Header: 'Objectives',
            accessor: 'row.objectives',
         },
      ],
      []
   );

   return (
      <div className="base-table">
         <TableComponent columns={columns} data={data} />
      </div>
   );
}

export default LTTargetViewTable;

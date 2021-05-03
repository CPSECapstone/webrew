import React, { useMemo } from 'react';
import { Progress } from '../../interfaces/Progress';
import { Users } from '../../interfaces/Users';
import TableComponent from '../TableComponent/TableComponent';

const users: Users = {
   users: [
      {
         id: '1',
         firstName: 'Sansa',
         lastName: 'Stark',
      },
      {
         id: '2',
         firstName: 'Robb',
         lastName: 'Stark',
      },
      {
         id: '3',
         firstName: 'Arya',
         lastName: 'Stark',
      },
      {
         id: '4',
         firstName: 'John',
         lastName: 'Snow',
      },
   ],
};

const userProgressMap = new Map<string, Progress>();

function LTStudentViewTable() {
   userProgressMap.set('1', {
      curStatus: 'Task 1.1',
      statusColor: '#00b300', // Green
      time: '2:10',
      // objective: objs[0],
   });

   userProgressMap.set('2', {
      curStatus: 'Task 1.2',
      statusColor: '#00b300', // Green
      time: '1:30',
      // objective: objs[1],
   });

   userProgressMap.set('3', {
      curStatus: 'Task 2.1',
      statusColor: '#a6a6a6', // Gray
      time: '1:15',
      // objective: objs[2],
   });

   userProgressMap.set('4', {
      curStatus: 'Task 1.1',
      statusColor: '#ff6666', // Red
      time: '6:15',
      // objective: objs[0],
   });

   const data: any[] = [];

   users.users.map((user) =>
      data.push({
         row: {
            section: 1,
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            time: userProgressMap.get(user.id)?.time,
            recent: {
               status: userProgressMap.get(user.id)?.curStatus,
               style: {
                  backgroundColor: userProgressMap.get(user.id)?.statusColor,
               },
            },
            average: '',
            progress: '%',
         },
      })
   );

   const columns = useMemo(
      () => [
         {
            Header: 'Section',
            accessor: 'row.section',
         },
         {
            Header: 'Student',
            accessor: 'row.name',
         },
         {
            Header: 'Time',
            accessor: 'row.time',
         },
         {
            Header: 'Recent',
            accessor: 'row.recent',
            Cell: ({ value }: { value: any }) => {
               // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
               return <>{value.status} </>;
            },
         },
         {
            Header: 'Average',
            accessor: 'row.average',
         },
         {
            Header: 'Progress',
            accessor: 'row.progress',
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

export default LTStudentViewTable;

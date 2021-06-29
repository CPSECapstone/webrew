/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CircularProgress } from '@material-ui/core';

import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StudentInfoFragment, useStudentsQuery } from '../../__generated__/types';
import TableComponent from '../TableComponent/TableComponent';
import { AddStudentDialog } from './AddStudentDialog';
import PayStudents from './PayStudents';

type StudentRow = {
   row: {
      name: string;
      points: number;
      earned: number;
      spent: number;
   };
};

const sortStudents = (a: StudentInfoFragment, b: StudentInfoFragment) => {
   return a.lastName.localeCompare(b.lastName);
};
export function StudentsTab() {
   const { classId } = useParams<Record<string, string>>();
   const [students, setStudents] = useState<StudentInfoFragment[]>([]);

   const editStudents = (updated: StudentInfoFragment[]) => {
      const items = [...students];
      updated.forEach((toBeUpdated) => {
         const itemIndex = items.findIndex(
            (student) => student.studentId === toBeUpdated.studentId
         );
         items[itemIndex] = toBeUpdated;
      });

      setStudents(items);
   };

   let rowData: StudentRow[] = [];

   const { loading, error, data, refetch } = useStudentsQuery({
      variables: {
         courseId: classId,
      },
   });

   useEffect(() => {
      if (!data) {
         return;
      }
      setStudents([...data.students].sort(sortStudents));
   }, [data]);

   const rowClicked = (studentRow: StudentRow) => {
      console.log(`${studentRow.row.name} Clicked`);
   };

   const columns = useMemo(
      () => [
         {
            Header: 'Name',
            accessor: 'row.name',
         },
         {
            Header: 'Points',
            accessor: 'row.points',
         },
         {
            Header: 'Earned',
            accessor: 'row.earned',
         },
         {
            Header: 'Spent',
            accessor: 'row.spent',
         },
      ],
      []
   );

   if (loading || !data) {
      return (
         <div className="center">
            <CircularProgress size={150} />
         </div>
      );
   }

   if (error) {
      return <s>error</s>;
   }

   rowData = students.map((student: StudentInfoFragment) => {
      return {
         row: {
            name: `${student.firstName} ${student.lastName}`,
            points: student.points,
            spent: student.totalPointsSpent,
            earned: student.totalPointsAwarded,
         },
      };
   });

   return (
      <div>
         <PayStudents students={students} refetch={refetch} editStudents={editStudents} />
         <AddStudentDialog course={classId} refetch={refetch} />
         <div className="table">
            <TableComponent columns={columns} data={rowData} rowClickFunction={rowClicked} />
         </div>
      </div>
   );
}

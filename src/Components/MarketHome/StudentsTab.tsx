/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CircularProgress } from '@material-ui/core';

import { useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { environment } from '../../environment';
import { Role, StudentInfoFragment, User, useStudentsQuery } from '../../__generated__/types';
import TableComponent from '../TableComponent/TableComponent';
import { AddStudentDialog } from './AddStudentDialog';
import PayStudents from './PayStudents';

type StudentRow = {
   row: {
      name: string;
      points: number;
      earned: number;
      spent: number;
      id: string;
      purchaseBlocked: string;
   };
};

const sortStudents = (a: StudentInfoFragment, b: StudentInfoFragment) => {
   return a.lastName.localeCompare(b.lastName);
};

type Props = {
   user: User;
};
export function StudentsTab({ user }: Props) {
   const { classId } = useParams<Record<string, string>>();
   const [students, setStudents] = useState<StudentInfoFragment[]>([]);
   const history = useHistory();

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
      fetchPolicy: 'network-only',
   });

   useEffect(() => {
      if (!data) {
         return;
      }
      setStudents([...data.students].sort(sortStudents));
   }, [data]);

   const rowClicked = (studentRow: StudentRow) => {
      history.push(`/student/${classId}/${studentRow.row.id}`);
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
         {
            Header: 'Purchases Blocked',
            accessor: 'row.purchaseBlocked',
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
      return <s>{error}</s>;
   }

   rowData = students.map((student: StudentInfoFragment) => {
      return {
         row: {
            name: `${student.firstName} ${student.lastName}`,
            points: student.points,
            spent: student.totalPointsSpent,
            earned: student.totalPointsAwarded,
            id: student.studentId,
            purchaseBlocked: student.purchaseBlocked ? 'X' : '',
         },
      };
   });

   return (
      <div>
         <PayStudents students={students} refetch={refetch} editStudents={editStudents} />
         <div className="table">
            <TableComponent columns={columns} data={rowData} rowClickFunction={rowClicked} />
         </div>
         <p>Course ID: {classId}</p>
         <p>
            Course Join Link: {environment.url}join/{classId}/{user.id}
         </p>
         {user.role === Role.Instructor ? (
            <AddStudentDialog course={classId} refetch={refetch} />
         ) : (
            <></>
         )}
      </div>
   );
}

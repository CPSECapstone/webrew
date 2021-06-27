/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CircularProgress } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StudentInfoFragment, useStudentsQuery } from '../../__generated__/types';
import { AddStudentDialog } from './AddStudentDialog';

const sortStudents = (a: StudentInfoFragment, b: StudentInfoFragment) => {
   return a.lastName.localeCompare(b.lastName);
};

export function StudentsTab() {
   const { classId } = useParams<Record<string, string>>();

   const { loading, error, data, refetch } = useStudentsQuery({
      variables: {
         courseId: classId,
      },
   });

   return (
      <div>
         <AddStudentDialog course={classId} refetch={refetch} />
         {loading || error || !data ? (
            <div className="center">
               <CircularProgress size={150} />
            </div>
         ) : (
            data.students.map((student: StudentInfoFragment) => (
               <>
                  {' '}
                  {student.firstName} {student.lastName}
               </>
            ))
         )}
      </div>
   );
}

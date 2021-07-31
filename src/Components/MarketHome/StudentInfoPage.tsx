import { Button, Checkbox } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlockPurchasesMutation, useStudentQuery } from '../../__generated__/types';

export function StudentInfoPage() {
   const { studentId, classId } = useParams<Record<string, string>>();
   const [checked, setChecked] = useState(true);

   const [blockPurchases] = useBlockPurchasesMutation({});

   const handleDeleteStudent = () => {
      console.log('student deleted!');
   };

   const handleChange = () => {
      blockPurchases({
         variables: {
            studentId,
            courseId: classId,
            blocked: !checked,
         },
      }).catch((e) => console.log(e));
      setChecked(!checked);
   };
   const { loading, error, data } = useStudentQuery({
      variables: {
         studentId,
         courseId: classId,
      },
      fetchPolicy: 'network-only',
   });

   useEffect(() => {
      if (!data) {
         return;
      }
      setChecked(data.student.purchaseBlocked);
   }, [data]);

   if (loading) return <div>Loading...</div>;
   if (error) {
      console.log(error);
      return <>{error}</>;
   }
   if (!data) {
      return <>Data could not be retrieved</>;
   }

   const { student } = data;
   return (
      <div>
         <h3>
            {student.firstName} {student.lastName}
         </h3>
         <p>User Id: {student.studentId}</p>
         <p>Points: {student.points}</p>
         <p>Total Points Earned: {student.totalPointsAwarded}</p>
         <p>Total Points Spent: {student.totalPointsSpent}</p>
         <div>
            Purchases Blocked
            <Checkbox
               checked={checked}
               onChange={handleChange}
               inputProps={{ 'aria-label': 'primary checkbox' }}
            />
         </div>
         <Button
            style={{
               width: 100,
               marginTop: 20,
               backgroundColor: '#DC143C',
               color: 'white',
            }}
            onClick={handleDeleteStudent}
            data-testid="create-btn"
         >
            Delete Student
         </Button>
      </div>
   );
}

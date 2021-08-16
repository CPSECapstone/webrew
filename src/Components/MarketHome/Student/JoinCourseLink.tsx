import { ApolloError } from '@apollo/client';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AddStudentMutation, useAddStudentMutation } from '../../../__generated__/types';
import { joinCourseFormToInputType } from './JoinCourseForm';

type Props = {
   refetchCourses: any;
};

export function JoinCourseLink({ refetchCourses }: Props) {
   const history = useHistory();
   const { instructorId, classId } = useParams<Record<string, string>>();

   const handleError = (_error: ApolloError) => {
      history.replace('');
   };

   const onMutationCompleted = (data: AddStudentMutation) => {
      refetchCourses();
      history.replace('');
   };

   const [addStudent, { loading: mutationLoading, error: mutationError }] = useAddStudentMutation({
      onError: handleError,
      onCompleted: onMutationCompleted,
   });

   useEffect(() => {
      // eslint-disable-next-line no-void
      addStudent({
         variables: {
            student: joinCourseFormToInputType({ instructorId, courseId: classId }),
         },
      }).catch((e) => {
         console.log(e);
         history.replace('');
      });

      // do stuff here...
   }, [addStudent, classId, history, instructorId]);
   return <>Adding Course...</>;
}

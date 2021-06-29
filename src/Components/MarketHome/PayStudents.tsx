/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import ColumnSelect from '../../destin-react-column';
import { StudentInfoFragment } from '../../__generated__/types';

type Props = {
   students: StudentInfoFragment[];
   refetch: any;
   forceUpdate: any;
};

const theme = {
   headerBgColor: '#6d9eeb',
   columnBorderColor: '#CBD5E0',
   textColor: '#000000',
   columnBgColor: '#CBD5E0',
   buttonBgColor: '#CBD5E0',
   searchFocusBorderColor: '#805Ad5',
};

export default function PayStudents({ students }: Props) {
   const options = students.map((student) => {
      return { value: student.studentId, label: `${student.firstName} ${student.lastName}` };
   });

   return (
      <div>
         <h4>Award Points</h4>
         <ColumnSelect
            isSearchable
            defaultValue={[]}
            options={[...options]}
            onChange={() => {}}
            leftHeader="Students"
            rightHeader="Point Recipients"
            theme={theme}
         />
      </div>
   );
}

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
   GetStudentsByCourseQuery,
   Maybe,
   MissionsQueryResult,
   useGetStudentsByCourseQuery,
   useMissionsQuery,
} from '../../__generated__/types';
import TableComponent from '../TableComponent/TableComponent';

export interface TaskColumnGroup {
   Header: string;
   columns: {
      Header: string;
      accessor: string;
   }[];
}

export interface MissionStudentViewRow {
   row: {
      name: string;
      studentId: string;
      [task: string]: string;
   };
}

export interface RowTaskData {
   taskName: string;
   taskId: string;
}

export interface RowStudentData {
   firstName?: Maybe<string>;
   studentId: string;
}

/**
 * Create a column, along with row accessors, for each task contained in the mission
 */
export function generateTaskColumnGroup(
   missionName: string,
   tasks: RowTaskData[]
): TaskColumnGroup {
   return {
      Header: `${missionName} Tasks`,
      columns: tasks.map((taskInfo) => {
         return { Header: taskInfo.taskName, accessor: `row.${taskInfo.taskId}` };
      }),
   };
}

export function generateStudentRows(
   students: RowStudentData[],
   tasks: RowTaskData[]
): MissionStudentViewRow[] {
   return students.map((student) => {
      const base: MissionStudentViewRow = {
         row: {
            name: student.firstName ? student.firstName : student.studentId,
            studentId: student.studentId,
         },
      };

      tasks.forEach((task) => {
         base.row[`${task.taskId}`] = '22'; // TODO pass in grades
      });

      return base;
   });
}

const mockTasks = [
   {
      taskName: 'Task 1',
      taskId: 'TASK#1',
   },
   {
      taskName: 'Task 2',
      taskId: 'TASK#2',
   },
];

function MissionStudentViewTable() {
   const { data: students } = useGetStudentsByCourseQuery();
   const tableColumns: any = [
      {
         Header: 'Student Grades',
         columns: [
            {
               Header: 'Student',
               accessor: 'row.name',
            },
         ],
      },
   ];

   const [selectedMission, setSelectedMission] = useState<string | null>(null);
   const [fetchOnce, setFetchOnce] = useState<boolean>(false);

   const handleMissionSelection = (
      event: React.MouseEvent<HTMLElement>,
      newSelectedMission: string | null
   ) => {
      setSelectedMission(newSelectedMission);
   };

   const { data: courseMissions }: MissionsQueryResult = useMissionsQuery();

   React.useEffect(() => {
      if (!courseMissions || fetchOnce) {
         return;
      }
      setFetchOnce(true);
   }, [fetchOnce, courseMissions]);

   if (!courseMissions || !students) {
      return <div />;
   }
   const taskColumnGroup = generateTaskColumnGroup('Mission 1', mockTasks);
   const tableData: MissionStudentViewRow[] = generateStudentRows(students.students, mockTasks);
   tableColumns.push(taskColumnGroup);

   console.log(tableColumns)
   console.log(tableData)
   return (
      <div>
         <ToggleButtonGroup
            value={selectedMission}
            style={{ marginBottom: '20px', paddingLeft: '20px' }}
            exclusive
            onChange={handleMissionSelection}
         >
            {courseMissions?.missions?.map((mission) => {
               return (
                  <ToggleButton value={mission?.id} style={{ width: '100px' }}>
                     {mission?.name}
                  </ToggleButton>
               );
            })}
         </ToggleButtonGroup>
         <div className="base-table">
            <TableComponent columns={tableColumns} data={tableData} />
         </div>
      </div>
   );
}

export default MissionStudentViewTable;

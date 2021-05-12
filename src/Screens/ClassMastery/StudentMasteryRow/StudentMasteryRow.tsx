import { useState } from 'react';
import styled from 'styled-components';
import { color } from '../../../Components/constants.json';
/* import { useGetTaskByIdQuery } from '../../__generated__/types'; */

type MasteryBarProps = { percentage: number };

const MasteryBar = styled.div`
   position: relative;
   border-radius: 11px;
   background-color: ${color.bgGrey};
   overflow: hidden;
`;

const InnerBar = styled.div<MasteryBarProps>`
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   background-color: ${({ percentage }) =>
      percentage > 0.66 ? color.green : percentage > 0.33 ? color.yellow : color.red};
   right: ${({ percentage }) => 100 - percentage * 100 + '%'};
   > span {
      position: absolute;
      color: white;
      top: 4px;
      font-size: 14px;
      right: ${({ percentage }) => (percentage > 0.25 ? '5px' : '-33px')};
   }
`;

function Mastery({ percentage }: MasteryBarProps) {
   return (
      <MasteryBar>
         <InnerBar percentage={percentage}>
            <span>{Math.floor(percentage * 100)}%</span>
         </InnerBar>
      </MasteryBar>
   );
}

const Container = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   margin-bottom: 6px;
`;

const Header = styled.div`
   display: flex;
   align-items: center;
   color: black;
   font-size: 16px;
   font-weight: 700;
   min-width: 150px;
   margin-right: 16px;
`;

const Dot = styled.div`
   background-color: ${color.green};
   border-radius: 999px;
   width: 8px;
   height: 8px;
   margin-right: 6px;
`;

const Content = styled.div`
   display: flex;
   align-items: center;
   overflow: horizontal;
   > :not(last-child) {
      margin-right: 21px;
      height: 32px;
      min-width: 100px;
   }
`;

function StudentMasteryRow({ name, learningObjectives }: any) {
   /* const { data: taskByIdQuery } = useGetTaskByIdQuery({ */
   /*    variables: { taskId }, */
   /* }); */

   /* const [page, setPage] = useState(0); */

   /* const maxPage: number = */
   /*    taskByIdQuery === undefined || taskByIdQuery.task.pages === undefined */
   /*       ? 0 */
   /*       : taskByIdQuery.task.pages.length - 1; */

   /* if (!taskByIdQuery) { */
   /*    return <></>; */
   /* } */

   return (
      <Container>
         <Header>
            <Dot />
            {name}
         </Header>
         <Content>
            {learningObjectives.map(({ percentage }: any) => (
               <Mastery percentage={percentage} />
            ))}
         </Content>
      </Container>
   );
}

const LearningObjectiveName = styled.span`
   text-align: center;
`;

function StudentMasteryHeader({ learningObjectiveNames }: { learningObjectiveNames: string[] }) {
   return (
      <Container style={{ marginBottom: 24 }}>
         <Header>Student</Header>
         <Content>
            {learningObjectiveNames.map((name) => (
               <LearningObjectiveName>{name}</LearningObjectiveName>
            ))}
         </Content>
      </Container>
   );
}

export default StudentMasteryRow;
export { StudentMasteryHeader };

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from 'styled-components';
import { color } from '../../Components/constants.json';

type MasteryBarProps = { percentage: number };

const MasteryBar = styled.div`
   border-radius: 11px;
   background-color: ${color.bgGrey};
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

const InnerBar = styled.div<MasteryBarProps>`
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   background-color: ${({ percentage }) =>
      // eslint-disable-next-line no-nested-ternary
      percentage > 0.66 ? color.green : percentage > 0.33 ? color.yellow : color.red};
   right: ${({ percentage }) => `${100 - percentage * 100}%`};
   > span {
      position: absolute;
      color: black;
      top: 4px;
      font-size: 14px;
      right: ${({ percentage }) => (percentage > 0.25 ? '5px' : '-33px')};
   }
`;

export function Mastery({ percentage }: MasteryBarProps) {
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
   return (
      <Container>
         <Header>
            <Dot />
            {name}
         </Header>
         <Content>
            {learningObjectives.map(({ percentage }: any) => (
               // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

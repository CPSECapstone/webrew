import { useState } from 'react';
import styled from 'styled-components';
import { color } from '../../Components/constants.json';

import StudentMasteryRow, { StudentMasteryHeader } from './StudentMasteryRow';

const Page = styled.div`
   margin: 33px 90px;
`;
const Header = styled.div`
   color: ${color.textBlue};
   font-size: 36px;
   font-weight: 550;
   margin-bottom: 32px;
`;

const Content = styled.div``;

const MOCK_LOBJ_NAMES = ['Objective 1', 'Objective 2'];

const MOCK_DATA = [
   {
      name: 'Ryan Fay',
      learningObjectives: [
         {
            objectiveName: 'Objective 1',
            percentage: 1,
         },
         {
            objectiveName: 'Objective 2',
            percentage: 0.9,
         },
      ],
   },
   {
      name: 'Robert Middleton',
      learningObjectives: [
         {
            objectiveName: 'Objective 1',
            percentage: 0.6,
         },
         {
            objectiveName: 'Objective 2',
            percentage: 0.7,
         },
      ],
   },
   {
      name: 'Darian Nguyen',
      learningObjectives: [
         {
            objectiveName: 'Objective 1',
            percentage: 0.24,
         },
         {
            objectiveName: 'Objective 2',
            percentage: 0.14,
         },
      ],
   },
];

function ClassMastery() {
   //TODO Get real data
   return (
      <Page>
         <Header>Class Mastery</Header>
         <Content>
            <StudentMasteryHeader learningObjectiveNames={MOCK_LOBJ_NAMES} />
            {MOCK_DATA.map(({ name, learningObjectives }) => (
               <StudentMasteryRow name={name} learningObjectives={learningObjectives} />
            ))}
         </Content>
      </Page>
   );
}

export default ClassMastery;

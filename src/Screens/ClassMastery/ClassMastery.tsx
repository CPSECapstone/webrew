import styled from 'styled-components';
import { color } from '../../Components/constants.json';

import StudentMasteryRow, { StudentMasteryHeader } from './StudentMasteryRow';

import { MOCK_LOBJ_NAMES, MOCK_LOBJ_MASTERY } from '../../clients/mock';

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

function ClassMastery() {
   return (
      <Page>
         <Header>Class Mastery</Header>
         <Content>
            <StudentMasteryHeader learningObjectiveNames={MOCK_LOBJ_NAMES} />
            {MOCK_LOBJ_MASTERY.map(({ name, learningObjectives }) => (
               <StudentMasteryRow name={name} learningObjectives={learningObjectives} />
            ))}
         </Content>
      </Page>
   );
}

export default ClassMastery;

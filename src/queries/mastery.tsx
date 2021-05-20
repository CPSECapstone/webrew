import { gql } from '@apollo/client';

export const GET_TARGETS = gql`
   query ClassTargetMastery {
      classTargetMastery(targetId: "8ed63da3ff3") {
         target {
            targetName
         }
         studentObjectiveMasteryList {
            student {
               firstName
               lastName
            }
            objectiveMasteryList {
               objectiveId
               mastery
            }
         }
      }
   }
`;

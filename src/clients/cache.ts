import { InMemoryCache } from '@apollo/client';

import * as mock from './mock';

export const cache: InMemoryCache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            quizblockSubmission: {
               read() {
                  return mock.quizblockSubmissionVar();
               },
            },
            quizblockSubmissions: {
               read() {
                  return mock.quizblockSubmissionsVar();
               },
            },
            task: {
               read(_, { args }) {
                  return mock.mockTaskVar();
               },
            },
         },
      },
   },
});

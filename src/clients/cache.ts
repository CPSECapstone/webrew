import { InMemoryCache } from '@apollo/client';

import * as mock from './mock';

export const cache: InMemoryCache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            quizblock: {
               read() {
                  return mock.quizblockVar();
               },
            },
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
         },
      },
   },
});

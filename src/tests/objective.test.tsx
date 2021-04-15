/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MockedProvider } from '@apollo/client/testing';
import TestRenderer from 'react-test-renderer';
import React from 'react';
import { GET_LEARNING_OBJECTIVE } from '../queries/LearningObjectiveQueries';
import { Objective } from '../view-task-submission/view-task-submission';

const mocks = [
   {
      request: {
         query: GET_LEARNING_OBJECTIVE,
         variables: {
            course: 'Math',
         },
      },
      result: {
         data: {
            learningObjectives: { id: '', course: '', name: '', description: '' },
         },
      },
   },
];

it('renders without error', () => {
   const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
         <Objective course="Math" />
      </MockedProvider>
   );

   const tree = component.toJSON();
   expect(tree.children).toContain('Loading...');
});

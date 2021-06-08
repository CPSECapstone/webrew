/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

const mocks: readonly MockedResponse<Record<string, any>>[] | undefined = []; // TODO fill these in with mock apollo responses

const Providers: FC = ({ children }) => {
   return <MockedProvider mocks={mocks}>{children}</MockedProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
   render(ui, { wrapper: Providers, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

export { customRender as render };

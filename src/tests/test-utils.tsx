import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

const mocks = []; //TODO fill these in with mock apollo responses

const Providers: FC = ({ children }) => {
   return <MockedProvider mocks={mocks}>{children}</MockedProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
   render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };

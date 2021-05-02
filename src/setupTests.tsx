// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import React, { ComponentType } from 'react';

const queryClient = new QueryClient();
export const router = (children: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

const Wrapper: React.ComponentType = ({ children }) => {
  return router(children);
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: Wrapper as ComponentType, ...options });

global.URL.createObjectURL = jest.fn();

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

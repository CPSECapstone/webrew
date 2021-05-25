How to write a UI unit test
---
1. See `src/tests/course.test.tsx` and my changes to `src/course/create-course-dialog.tsx`
   - We'll organize these the same way we'll organize interfaces: by scene/page/feature/namespace
2. Add to an existing test file if testing the same namespace, or create a new test file. Import react and all that other stuff
3. Import react-testing-library functions from `src/tests/test-utils.tsx`
   - This is our wrapper library that includes a custom render function to mock Apollo requests.
4. Add a test(). Here are some handy functions:
   - `render()`: Render your component
   - `fireEvent`: This is the mocked user. Use it to mock `.click()` events, for example.
   - `screen.getBy...()`: This is called a query, used to grab UI components. Think of them like querySelectors.
       - The ones we'll use the most is probably `getByTestId` or `getByLabelText`
   - `expect()`: Basically our assert
   - RTL Docs for more: [react-testing-library](https://testing-library.com/docs/react-testing-library/cheatsheet)
   - List of expect() chains: [jest-dom](https://github.com/testing-library/jest-dom#table-of-contents)
5. Add necessary `data-testid`'s to components that you want to be grabbable by the tests.
6. Run `npm test` 

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock JSDOM API: Fixes "Not implemented: window.scrollTo" error.
// The Home component calls this, but JSDOM does not support it.
// We provide a simple mock function so the test runner doesn't crash.
global.scrollTo = jest.fn();
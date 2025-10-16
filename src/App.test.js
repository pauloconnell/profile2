import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Keen Problem solver/i);
  expect(linkElement).toBeInTheDocument();
});

// Test Case 1: Checks if the main heading renders correctly
  test('renders Header with my name', () => {
    // 1. Render the component
    render(<App />);
  
    
    // 2. Query for the expected element (using text content)
    // /.../i makes the search case-insensitive
    const heading = screen.getByRole('heading', { name: /Paul O'Connell/i });

    // 3. Assertion (using jest-dom's toBeInTheDocument())
    expect(heading).toBeInTheDocument(); 
  });

  // Test Case 2: Checks if the subheading renders correctly
  test('renders subheading', () => {
    // 1. Render the component
    render(<App />);

    // 2. Query for the expected element (using text content)
    const subheading = screen.getAllByText(/Full Stack Software Developer/i, { hidden: true });

    // 3. Assertion (using jest-dom's toBeInTheDocument())
    expect(subheading[0]).toBeInTheDocument();
  });






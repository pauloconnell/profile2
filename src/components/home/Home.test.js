import { render, screen } from '@testing-library/react';

import Home from './Home.js';
// Import MemoryRouter from react-router-dom - needed for 'useLocation()' in <Home /> which needs router -> MemoryRouter is Router for Testing
import { MemoryRouter } from 'react-router-dom';


describe('Home Component', () => {

  // A helper function to wrap the Home component in a router for every test
  const renderWithRouter = () => {
    // We wrap the component we are testing in <MemoryRouter>
    return render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  };





// Test Case 1: Checks if the main heading renders correctly
  test('renders Header with my name', () => {
    // 1. Render the component
    //render(<Home />);
    // Use the new helper function to render with the router context
    renderWithRouter();
    
    // 2. Query for the expected element (using text content)
    // /.../i makes the search case-insensitive
    const jobTitle = screen.getByTestId('SnFE', { name: /Senior Front End Software Engineer/i });

    // 3. Assertion (using jest-dom's toBeInTheDocument())
    expect(jobTitle).toBeInTheDocument(); 
  });

  // Test Case 2: Checks a specific element using a data attribute
  test('renders the prompt to write tests', () => {
    // Use the new helper function to render with the router context
    renderWithRouter();
    
    // Query using the data-testid attribute for reliable selection
    const paragraph = screen.getByTestId('reference');
    
    // Assertion
    expect(paragraph).toHaveTextContent('troubleshoot and problem solve');
  });

})

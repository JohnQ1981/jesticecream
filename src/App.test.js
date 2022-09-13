import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learning jest/i);
  expect(linkElement).toBeInTheDocument();
});

test("button has correct initial color", () => {
  render (<App />)
 
  // find an element with a tole of button and text of 'Change to Blue'
 const colorButton = screen.getByRole('button', { name : 'Change to Blue'});
 
 
 expect(colorButton).toHaveStyle({backgroundColor: 'Red'})
 
 // click button
 fireEvent.click(colorButton);
 
 //expect the background color to be Midnight blue
 expect(colorButton).toHaveStyle({ backgroundColor: 'Blue' });
 
 // expect the button text to be "Change to Red"
 expect(colorButton.textContent).toBe('Change to Red');
 
 });

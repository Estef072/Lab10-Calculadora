import React from 'react';
import { render, screen } from '@testing-library/react';
import StartApp from '../StartApp';

describe('Test StartApp1', () => {
  it('Test StartApp1', () => {
    render(<StartApp />);
    const testElement = screen.getByTestId('input-test-test');

    expect(testElement).toBeInTheDocument();

 })

})
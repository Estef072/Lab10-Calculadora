import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StartApp from '../StartApp';

test('Test  button 1 ', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero1');
  const button1 = screen.getByText('1');
  userEvent.click(button1);

  expect(testElement).toBeInTheDocument();
  expect(button1).toHaveTextContent('1');
});

test('Test  button 2 ', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero2');
  const button2 = screen.getByText('2');
  userEvent.click(button2);

  expect(testElement).toBeInTheDocument();
  expect(button2).toHaveTextContent('2');
});

test('Test  button 3', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero3');
  const button3 = screen.getByText('3');
  userEvent.click(button3);
  expect(testElement).toBeInTheDocument();
  expect(button3).toHaveTextContent('3');
});

test('Test  button 4', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero4');
  const button4 = screen.getByText('4');
  userEvent.click(button4);
  expect(testElement).toBeInTheDocument();
  expect(button4).toHaveTextContent('4');
});

test('Test  button 5', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero5');
  const button5 = screen.getByText('5');
  userEvent.click(button5);
  expect(testElement).toBeInTheDocument();
  expect(button5).toHaveTextContent('5');
});

test('Test  button 6', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero6');
  const button6 = screen.getByText('6');
  userEvent.click(button6);
  expect(testElement).toBeInTheDocument();
  expect(button6).toHaveTextContent('6');
});

test('Test  button 7', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero7');
  const button7 = screen.getByText('7');
  userEvent.click(button7);
  expect(testElement).toBeInTheDocument();
  expect(button7).toHaveTextContent('7');
});

test('Test  button 8', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero8');
  const button8 = screen.getByText('8');
  userEvent.click(button8);
  expect(testElement).toBeInTheDocument();
  expect(button8).toHaveTextContent('8');
});

test('Test  button 9', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('Testnumero9');
  const button9 = screen.getByText('9');
  userEvent.click(button9);
  expect(testElement).toBeInTheDocument();
  expect(button9).toHaveTextContent('9');
});

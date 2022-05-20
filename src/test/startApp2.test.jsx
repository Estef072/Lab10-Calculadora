import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StartApp from '../StartApp';

test('Test  button de igual', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('ButtonIgual');
  const buttonIgual = screen.getByText('=');
  userEvent.click(buttonIgual);

  expect(testElement).toBeInTheDocument();
  expect(buttonIgual).toHaveTextContent('=');
});

test('Test  button de  +', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('ButtonMas');
  const buttonMas = screen.getByText('+');
  userEvent.click(buttonMas);

  expect(testElement).toBeInTheDocument();
  expect(buttonMas).toHaveTextContent('+');
});

test('Test  button de menos', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('ButtonMenos');
  const ButtonMenos = screen.getByText('-');
  userEvent.click(ButtonMenos);

  expect(testElement).toBeInTheDocument();
  expect(ButtonMenos).toHaveTextContent('-');
});

test('Test  button de por', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('ButtonPor');
  const ButtonPor = screen.getByText('*');
  userEvent.click(ButtonPor);

  expect(testElement).toBeInTheDocument();
  expect(ButtonPor).toHaveTextContent('*');
});

test('Test  button de divi', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('ButtonDivi');
  const ButtonDivi = screen.getByText('/');
  userEvent.click(ButtonDivi);

  expect(testElement).toBeInTheDocument();
  expect(ButtonDivi).toHaveTextContent('/');
});

test('Test  button de punto', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('ButtonPunto');
  const ButtonP = screen.getByText('.');
  userEvent.click(ButtonP);

  expect(testElement).toBeInTheDocument();
  expect(ButtonP).toHaveTextContent('.');
});

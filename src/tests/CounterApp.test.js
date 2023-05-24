
import React from 'react'
import "@testing-library/jest-dom";
import { render, fireEvent, screen, act } from '@testing-library/react';
import CounterApp from '../CounterApp';

describe('Pruebas en PrimeraApp', () => {

  test('Mostrar el valor inicial de CounterApp', () => {
    const value = 5;
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeInTheDocument();
  });  

  test('Mostrar el valor cuando se modifica +1 CounterApp', async () => {
    const value = 5;
    render(<CounterApp value={value} />);
    expect(value).toBe(5);
    const buttonAdd = screen.getByRole('button', { name: '+1' });
    await act(async () => {
        fireEvent.click(buttonAdd);
    });
    expect(screen.getByText(6)).toBeInTheDocument();
  });  

  test('Mostrar el valor cuando se modifica -1 CounterApp', async () => {
    const value = 5;
    render(<CounterApp value={value} />);
    expect(value).toBe(5);
    const buttonAdd = screen.getByRole('button', { name: '-1' });
    await act(async () => {
        fireEvent.click(buttonAdd);
    });
    expect(screen.getByText(4)).toBeInTheDocument();
  }); 

  test('Mostrar el valor 0 cuando se reset', async () => {
    const value = 5;
    render(<CounterApp value={value} />);
    expect(value).toBe(5);
    const buttonAdd = screen.getByRole('button', { name: 'Reset' });
    await act(async () => {
        fireEvent.click(buttonAdd);
    });
    expect(screen.getByText(0)).toBeInTheDocument();
  });  
});
